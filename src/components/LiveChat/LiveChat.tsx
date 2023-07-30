'use client';
import { useChatContext } from '@/context';
import { BiSolidMessageDetail } from 'react-icons/bi';
import { ChatModal } from '../ChatModal';

export const LiveChat = () => {
  const { setOpen } = useChatContext();

  return (
    <div className='fixed bottom-10 right-10'>
      <ChatModal />
      <BiSolidMessageDetail
        onClick={() => setOpen((prevOpen) => !prevOpen)}
        fill='#94a3b8'
        className='cursor-pointer transition-opacity duration-300 hover:opacity-70 text-5xl'
      />
    </div>
  );
};
