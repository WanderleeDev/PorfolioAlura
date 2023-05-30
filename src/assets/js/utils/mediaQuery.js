export function mediaQuery(codeToExecute, removeCodeToExecute) {
  
  //variable que crea un mediaQuery  con las dimensiones recibidas
  const media = window.matchMedia('(min-width: 360px)');
  
  //validamos si la pantalla cumple con las dimensiones deseadas
  if (media.matches) {
    //código a ejecutar, que inicializa la función 
    codeToExecute();
  }

  //cada vez que cambie el tamaño de pantalla se ejecuta una escucha
  media.addEventListener('change', (event)=>{
    if (event.matches) {
      //si el evento entra dentro de las dimensiones deseadas de media ejecuta esta función
      codeToExecute();
    }else{
      //De lo contrario agregamos la función que removerá el evento
      removeCodeToExecute();
    }
  })
}