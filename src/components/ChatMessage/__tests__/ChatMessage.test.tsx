import React from 'react';
import { render } from '@testing-library/react';
import { ChatMessage, SenderType } from '..';
import '@testing-library/jest-dom/extend-expect';

describe('ChatMessage Component', () => {
  it('should render message with background color based on sender type', () => {
    const { getByText } = render(
      <ChatMessage message='Hello' sender={SenderType.Own} />
    );

    const messageElement = getByText('Hello');
    expect(messageElement).toBeInTheDocument();
    expect(messageElement).toHaveClass('bg-customPurple');
  });

  it('should align messages to the right for Own sender type', () => {
    const { getByTestId } = render(
      <ChatMessage message='Hello' sender={SenderType.Own} />
    );

    const messageContainer = getByTestId('chat-message');

    expect(messageContainer).toHaveStyle('justify-content: end');
  });

  it('should align messages to the left for Support sender type', () => {
    const { getByTestId } = render(
      <ChatMessage message='Hello' sender={SenderType.Support} />
    );

    const messageContainer = getByTestId('chat-message');

    expect(messageContainer).toHaveStyle('justify-content: start');
  });
});
