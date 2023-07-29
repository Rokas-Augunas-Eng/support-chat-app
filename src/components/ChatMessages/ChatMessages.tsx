import React, { useEffect, useRef, useState } from 'react';

export enum SenderType {
  Support = 'suport',
  Own = 'own',
}

type ChatMessageProps = {
  message: string;
  sender: SenderType;
};

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  sender,
}) => {
  const messageClass =
    sender === SenderType.Own ? 'bg-[#7c7cf1]' : 'bg-[#f17c7c]';
  const messageRef = useRef<HTMLDivElement | null>(null);
  const [isLongMessage, setIsLongMessage] = useState(false);

  useEffect(() => {
    if (messageRef.current) {
      const containerWidth = messageRef.current.parentElement?.clientWidth || 0;
      const messageWidth = messageRef.current.scrollWidth;
      const isLong = messageWidth > containerWidth * 0.75;
      setIsLongMessage(isLong);
    }
  }, [message]);

  return (
    <div
      className={`flex mb-2 justify-${
        sender === SenderType.Own ? 'end' : 'start'
      }`}
    >
      <div
        ref={messageRef}
        className={`p-3 rounded-2xl mb-4 ${
          isLongMessage ? 'w-3/4 max-w-full break-words' : ''
        } ${messageClass}`}
      >
        {message}
      </div>
    </div>
  );
};
