import { ChangeEvent, RefObject, useState } from 'react';

type ChatInputProps = {
  inputValue: string;
  textareaRef: RefObject<HTMLTextAreaElement>;
  handleInputChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSendMessage: () => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
};

export const ChatInput: React.FC<ChatInputProps> = ({
  inputValue,
  textareaRef,
  handleInputChange,
  handleSendMessage,
  handleKeyDown,
}) => {
  const [isTextareaFocused, setIsTextareaFocused] = useState<boolean>(false);

  return (
    <div
      className={`flex mt-4 items-center justify-between  border-t ${
        isTextareaFocused
          ? 'focus-within:outline focus-within:rounded focus-within:outline-[#69b852]'
          : ''
      }`}
    >
      <textarea
        ref={textareaRef}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsTextareaFocused(true)}
        onBlur={() => setIsTextareaFocused(false)}
        placeholder='Type your messge here...'
        className='px-4 py-2 resize-none overflow-y-hidden w-full h-10 focus:outline-none '
      />
      <button
        onClick={handleSendMessage}
        disabled={inputValue === '' ? true : false}
        className={`cursor-pointer transition-opacity duration-300 hover:opacity-70 p-2 w-24 m-4 text-white rounded-xl bg-[#69b852]
        ${inputValue === '' ? 'pointer-events-none disabled:opacity-70 ' : ''}`}
      >
        Send
      </button>
    </div>
  );
};
