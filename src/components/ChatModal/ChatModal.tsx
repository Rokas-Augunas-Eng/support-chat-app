import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { ChatHeader } from './ChatHeader';
import { ChatMessagesDisplay } from './ChatMessageDisplay';
import { ChatInput } from './ChatInput';

type ChatModalProps = {
  open: boolean;
  handleCloseChat: () => void;
};

export const ChatModal: React.FC<ChatModalProps> = ({
  open,
  handleCloseChat,
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustTextareaRows = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '40px';

      const scrollHeightNoMax = textareaRef.current.scrollHeight;

      textareaRef.current.style.height = `${Math.min(
        scrollHeightNoMax,
        150
      )}px`;

      const maxHeight = 150;
      if (scrollHeightNoMax > maxHeight) {
        textareaRef.current.style.height = `${maxHeight}px`;
        textareaRef.current.style.overflowY = 'auto';
      }
    }
  };

  useEffect(() => {
    adjustTextareaRows();
  }, [inputValue]);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
    adjustTextareaRows();
  };

  const handleSendMessage = () => {
    console.log('Message sent:', inputValue);

    setInputValue('');
    adjustTextareaRows();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div>
      {open && (
        <div
          className='w-96 fixed
        bottom-10 right-10 bg-white border border-grey-800 rounded-md shadow-md z-20 h-4/6 flex flex-col'
        >
          <ChatHeader onClose={handleCloseChat} />
          <ChatMessagesDisplay />
          <ChatInput
            inputValue={inputValue}
            textareaRef={textareaRef}
            handleInputChange={handleInputChange}
            handleSendMessage={handleSendMessage}
            handleKeyDown={handleKeyDown}
          />
        </div>
      )}
    </div>
  );
};
