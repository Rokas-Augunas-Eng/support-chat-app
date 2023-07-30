import { LiveChat } from '@/components/LiveChat';
import { ChatContextProvider } from '@/context';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <ChatContextProvider>
      <main className='flex min-h-screen flex-col p-24 bg-white text-black'>
        <ToastContainer />
        <LiveChat />
      </main>
    </ChatContextProvider>
  );
}
