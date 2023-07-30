import { RefObject } from 'react';

export const adjustTextareaRows = (
  textareaRef: RefObject<HTMLTextAreaElement>
) => {
  if (textareaRef.current) {
    const maxHeightInRem = 9.375;
    const rootFontSizeInPixels = 16;

    textareaRef.current.style.height = '2.5rem';

    const scrollHeightNoMax = textareaRef.current.scrollHeight;
    const scrollHeightInRem = scrollHeightNoMax / rootFontSizeInPixels;

    textareaRef.current.style.height = `${Math.min(
      scrollHeightInRem,
      maxHeightInRem
    )}rem`;

    if (scrollHeightInRem > maxHeightInRem) {
      textareaRef.current.style.overflowY = 'auto';
    } else {
      textareaRef.current.style.overflowY = 'hidden';
    }
  }
};
