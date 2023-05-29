import { mediaQuery } from "./mediaQuery";
import { addText, cleanContent } from "./noriaEventListener";

export const updateContent = (blockCode) => {
  //const screenSize = window.matchMedia('(min-width: 22.5rem)');
  const boxIcon = blockCode.querySelectorAll('.noria-box');
  const boxWindow = blockCode.querySelector('.noria-ejeCentral');

  const addTextHandler = (box) => () => addText(box, '.noria-text', boxWindow);
  const cleanContentHandler = () => cleanContent(boxWindow);

  const addListener = () => {
    boxIcon.forEach((box) => {
      box.addEventListener('mouseenter', addTextHandler(box));
      box.addEventListener('mouseleave', cleanContentHandler);
    });
  };

  const removeListener = () => {
    boxIcon.forEach((box) => {
      box.removeEventListener('mouseenter', addTextHandler(box));
      box.removeEventListener('mouseleave', cleanContentHandler);
    });
  };

  mediaQuery(addListener, removeListener);
};
