export function addContent(target, block, position = 'afterbegin') {
  const nodo = document.querySelector(target);

  switch (position) {
    case 'beforebegin':
    case 'afterbegin':
    case 'beforeend':
    case 'afterend':
      return nodo.insertAdjacentElement(position, block);
    default:
      console.error('Invalid position:', position);
      return null;
  }
}

export default { addContent };
