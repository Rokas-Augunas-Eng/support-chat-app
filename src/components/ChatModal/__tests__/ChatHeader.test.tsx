import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ChatHeader } from '../ChatHeader';
import { ChatContext, ChatContextProvider } from '@/context';

describe('ChatHeader component', () => {
  test('renders correctly', () => {
    const { getByText, getByTestId } = render(
      <ChatContextProvider>
        <ChatHeader />
      </ChatContextProvider>
    );

    const headerText = getByText('Support Chat');
    const closeIcon = getByTestId('close-icon');
    expect(headerText).toBeInTheDocument();
    expect(closeIcon).toBeInTheDocument();
  });

  test('clicking close icon calls setOpen', async () => {
    const setOpen = jest.fn();

    const { getByTestId, getByText } = render(
      <ChatContext.Provider value={{ open: true, setOpen }}>
        <ChatHeader />
      </ChatContext.Provider>
    );

    const closeIcon = getByTestId('close-icon');

    const chatHeader = getByText('Support Chat');
    expect(chatHeader).toBeInTheDocument();

    await userEvent.click(closeIcon);

    expect(setOpen).toHaveBeenCalled();
  });
});
