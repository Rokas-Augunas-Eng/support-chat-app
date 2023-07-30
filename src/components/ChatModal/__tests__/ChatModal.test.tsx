import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { ChatModal } from '..';
import { mockMessages } from '@/lib/tests/mocks';

global.fetch = jest.fn().mockResolvedValue({
  ok: true,
  json: () => Promise.resolve(mockMessages),
});

jest.mock('../../../context', () => ({
  useChatContext: jest.fn().mockReturnValue({ open: true }),
}));

describe('ChatModal component', () => {
  test('should send a message when Enter key is pressed', async () => {
    const { getByPlaceholderText } = render(<ChatModal />);

    const input = getByPlaceholderText('Type your messge here...');
    fireEvent.change(input, { target: { value: 'Hello, testing!' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 13 });

    await waitFor(() => {
      expect(input).toHaveValue('');
    });
  });

  test('renders chat messages when the component is open', async () => {
    const { getByText } = render(<ChatModal />);

    await waitFor(() => {
      mockMessages.forEach((message) => {
        const bodyElement = getByText(message.body);
        expect(bodyElement).toBeInTheDocument();
      });
    });
  });

  test('does not render chat messages when the component is closed', async () => {
    const { queryByText } = render(<ChatModal />);

    await waitFor(() => {
      expect(queryByText('Hello')).toBeNull();
    });
  });
});
