import { useChatContext } from '@/context';
import React from 'react';
import { MdOutlineClose } from 'react-icons/md';

export const ChatHeader: React.FC = () => {
  const { setOpen } = useChatContext();

  return (
    <div className='flex justify-between items-center p-4 border-b'>
      <h2 className='text-lg font-semibold'>Support Chat</h2>
      <MdOutlineClose
        data-testid='close-icon'
        onClick={() => setOpen((prevOpen) => !prevOpen)}
        className='cursor-pointer bg-slate-400 text-white rounded-lg p-1 text-3xl transition-opacity duration-300 hover:opacity-70'
      />
    </div>
  );
};
