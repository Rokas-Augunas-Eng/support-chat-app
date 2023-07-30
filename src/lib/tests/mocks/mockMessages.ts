import { SenderType } from '@/components/ChatMessage';
import { Message } from '@/components/ChatModal';

export const mockMessages: Message[] = [
  {
    id: 1,
    body: 'Hello there',
    author: SenderType.Own,
  },
  {
    id: 2,
    body: 'Good morning',
    author: SenderType.Support,
  },
  {
    id: 3,
    body: 'How may I be of assistance?',
    author: SenderType.Own,
  },
  {
    id: 4,
    body: 'I have a question about my booking?',
    author: SenderType.Support,
  },
  {
    id: 5,
    body: 'Sure, what is yor booking ref?',
    author: SenderType.Support,
  },
];
