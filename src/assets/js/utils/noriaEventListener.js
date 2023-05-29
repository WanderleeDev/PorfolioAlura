//Selecciona dentro de un rango de búsqueda un objetivo y luego usa el contenido de el objetivo seleccionado para ponérselo a TargetTag
export const addText = (range, selectionParameter, targeTag) =>{

  const paragraph = range.querySelector(selectionParameter);
  targeTag.textContent = paragraph.textContent;
}

//limpia el contenido de un objetivo seleccionado
export const cleanContent = (targeTag) => {

  targeTag.textContent= '';
}