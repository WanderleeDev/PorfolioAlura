//función para transicionar un elemento a un contenedor temporal
export function tempContainer(content) {

  const tempContainer = document.createElement('div');
  tempContainer.innerHTML = content.trim();

  const headerElement = tempContainer.firstChild;
  
  return headerElement
}