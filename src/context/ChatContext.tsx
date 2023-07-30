'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ChatContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ChatContext = createContext<ChatContextType>({
  open: false,
  setOpen: () => {},
});

export const useChatContext = () => useContext(ChatContext);

export const ChatContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const initialOpenState = localStorage.getItem('chatModalOpen') === 'true';
    setOpen(initialOpenState);
  }, []);

  useEffect(() => {
    localStorage.setItem('chatModalOpen', open.toString());
  }, [open]);

  return (
    <ChatContext.Provider value={{ open, setOpen }}>
      {children}
    </ChatContext.Provider>
  );
};
