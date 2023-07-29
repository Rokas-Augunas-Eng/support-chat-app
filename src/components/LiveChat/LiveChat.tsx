'use client';
import { LiveChatIcon } from '@/styles/icons';
import React, { useEffect, useState } from 'react';
import { ChatModal } from '../ChatModal';

export const LiveChat = () => {
  const [open, setOpen] = useState(false);

  const handleOpenChat = () => {
    setOpen(true);
  };

  const handleCloseChat = () => {
    setOpen(false);
  };

  useEffect(() => {
    const initialOpenState = localStorage.getItem('chatModalOpen') === 'true';
    setOpen(initialOpenState);
  }, []);

  useEffect(() => {
    localStorage.setItem('chatModalOpen', open.toString());
  }, [open]);

  return (
    <div className='fixed bottom-10 right-10'>
      <ChatModal open={open} handleCloseChat={handleCloseChat} />
      <LiveChatIcon
        onClick={handleOpenChat}
        width={50}
        height={50}
        fill='#94a3b8'
        className='cursor-pointer transition-opacity duration-300 hover:opacity-70'
      />
    </div>
  );
};
