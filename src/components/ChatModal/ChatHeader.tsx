import { CloseIcon } from '@/styles/icons';
import React from 'react';

export const ChatHeader: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className='flex justify-between items-center p-4 border-b'>
    <h2 className='text-lg font-semibold'>Support Chat</h2>
    <CloseIcon
      height={35}
      width={35}
      onClick={onClose}
      className='cursor-pointer bg-slate-400 text-white rounded-lg p-2 transition-opacity duration-300 hover:opacity-70'
    />
  </div>
);
