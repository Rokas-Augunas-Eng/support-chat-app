import 'react-toastify/dist/ReactToastify.css';
import { ChatMessage } from '../ChatMessage';
import { useRef, useLayoutEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import { Message } from '.';

type ChatMessageDisplayProps = {
  messages: Message[];
  loading: boolean;
};

export const ChatMessagesDisplay: React.FC<ChatMessageDisplayProps> = ({
  messages,
  loading,
}) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useLayoutEffect(() => {
    // TODO: investigate why container doesn't scroll to the bottom. Set timeout as a quick fix.
    setTimeout(scrollToBottom, 10);
  }, [messages, loading]);

  return (
    <div
      ref={chatContainerRef}
      className={`mt-4 overflow-y-auto flex-grow p-4  text-white ${
        loading && 'flex items-center justify-center'
      } `}
    >
      {loading ? (
        <BeatLoader color='#69b852' data-testid='loading-spinner' />
      ) : (
        messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message.body}
            sender={message.author}
          />
        ))
      )}
    </div>
  );
};
