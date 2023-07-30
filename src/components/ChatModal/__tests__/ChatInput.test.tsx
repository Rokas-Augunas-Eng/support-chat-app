import React, { createRef } from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ChatInput } from '../ChatInput';
import userEvent from '@testing-library/user-event';

describe('ChatInput component', () => {
  const inputValue = 'Test input value';
  const handleInputChange = jest.fn();
  const handleSendMessage = jest.fn();
  const handleKeyDown = jest.fn();
  const textareaRef = createRef<HTMLTextAreaElement>();

  test('renders the component with the correct props', async () => {
    const { getByPlaceholderText, getByText } = render(
      <ChatInput
        inputValue={''}
        handleInputChange={handleInputChange}
        handleSendMessage={handleSendMessage}
        handleKeyDown={handleKeyDown}
        textareaRef={textareaRef}
        loading={false}
      />
    );

    const textarea = getByPlaceholderText(
      'Type your messge here...'
    ) as HTMLTextAreaElement;
    expect(textarea).toBeInTheDocument();
    expect(textarea.value).toBe('');

    const sendButton = getByText('Send');
    expect(sendButton).toBeInTheDocument();
    expect(sendButton).toBeDisabled();
  });

  test('calls handleSendMessage when the Send button is clicked', async () => {
    const { getByText } = render(
      <ChatInput
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleSendMessage={handleSendMessage}
        handleKeyDown={handleKeyDown}
        textareaRef={textareaRef}
        loading={false}
      />
    );

    const sendButton = getByText('Send');
    expect(sendButton).toBeEnabled();

    await userEvent.click(sendButton);

    expect(handleSendMessage).toHaveBeenCalledTimes(1);
  });

  test('calls handleKeyDown when a key is pressed in the textarea', async () => {
    const { getByPlaceholderText } = render(
      <ChatInput
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleSendMessage={handleSendMessage}
        handleKeyDown={handleKeyDown}
        textareaRef={textareaRef}
        loading={false}
      />
    );

    const textarea = getByPlaceholderText(
      'Type your messge here...'
    ) as HTMLTextAreaElement;

    await userEvent.type(textarea, '{enter}');

    expect(handleKeyDown).toHaveBeenCalledTimes(1);
  });
});
