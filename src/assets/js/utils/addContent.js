export function addContent(target,block){

  const nodo =document.querySelector(target);
  return nodo.insertAdjacentElement('afterbegin', block);
}

export default {addContent}