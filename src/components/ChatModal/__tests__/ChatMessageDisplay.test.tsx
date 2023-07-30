import { mockMessages } from '@/lib/tests/mocks';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ChatMessagesDisplay } from '../ChatMessageDisplay';

describe('ChatMessageDisplay component', () => {
  test('renders messages', () => {
    const { getAllByTestId, getByText } = render(
      <ChatMessagesDisplay messages={mockMessages} loading={false} />
    );

    const messageElements = getAllByTestId('chat-message');
    expect(messageElements).toHaveLength(mockMessages.length);

    mockMessages.forEach((message) => {
      const bodyElement = getByText(message.body);
      expect(bodyElement).toBeInTheDocument();
    });
  });

  test('renders loading spinner when loading is true', () => {
    const { getByTestId } = render(
      <ChatMessagesDisplay messages={[]} loading={true} />
    );

    const loadingSpinner = getByTestId('loading-spinner');
    expect(loadingSpinner).toBeInTheDocument();
  });
});
