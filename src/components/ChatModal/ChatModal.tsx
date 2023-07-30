import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { ChatHeader } from './ChatHeader';
import { ChatMessagesDisplay } from './ChatMessageDisplay';
import { ChatInput } from './ChatInput';
import { SenderType } from '../ChatMessage';
import { toast } from 'react-toastify';
import { useChatContext } from '@/context';
import { API_BASE_URL } from '@/lib/config';
import { adjustTextareaRows } from './helper';

export type Message = {
  id: number;
  body: string;
  author: SenderType;
};

export const ChatModal: React.FC = () => {
  const { open } = useChatContext();
  const [inputValue, setInputValue] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
    adjustTextareaRows(textareaRef);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') {
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          body: inputValue,
          author: SenderType.Own,
        }),
      });

      if (response.ok) {
        setInputValue('');
        adjustTextareaRows(textareaRef);
        fetchMessages();
      } else {
        toast.error('Failed to send message. Please try again later.', {
          position: 'top-center',
        });
      }
    } catch (error) {
      toast.error('Error while sending message. Please try again.', {
        position: 'top-center',
      });
    }
  };

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/messages`);
      if (!response.ok) {
        throw new Error('Failed to fetch messages from the server.');
      }
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      toast.error('Failed to fetch messages. Please try again later.', {
        position: 'top-center',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open) {
      fetchMessages();
    }
  }, [open]);

  useEffect(() => {
    adjustTextareaRows(textareaRef);
  }, [inputValue]);

  return (
    <div>
      {open && (
        <div className='w-full md:w-96 fixed bottom-0 md:bottom-10 right-0 md:right-10 bg-white border border-grey-800 rounded-2xl shadow-md z-20 h-4/6 flex flex-col'>
          <ChatHeader />
          <ChatMessagesDisplay messages={messages} loading={loading} />
          <ChatInput
            inputValue={inputValue}
            textareaRef={textareaRef}
            loading={loading}
            handleInputChange={handleInputChange}
            handleSendMessage={handleSendMessage}
            handleKeyDown={handleKeyDown}
          />
        </div>
      )}
    </div>
  );
};
