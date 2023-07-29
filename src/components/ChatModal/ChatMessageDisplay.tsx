import { ChatMessage, SenderType } from '../ChatMessages';

const mockMessage = [
  {
    id: 1,
    body: 'Hello there',
    author: 'own',
  },
  {
    id: 2,
    body: 'Good morning',
    author: 'support',
  },
  {
    id: 3,
    body: 'How may I be of assistance?',
    author: 'support',
  },
  {
    id: 4,
    body: 'I have a question about my booking?',
    author: 'own',
  },
  {
    id: 4,
    body: 'Sure, what is yor booking ref?',
    author: 'support',
  },
];

export const ChatMessagesDisplay: React.FC = () => (
  <div className='mt-4 overflow-y-auto p-4 flex-grow text-white '>
    {mockMessage.map((message) => (
      <ChatMessage
        key={message.id}
        message={message.body}
        sender={message.author as SenderType}
      />
    ))}
  </div>
);
