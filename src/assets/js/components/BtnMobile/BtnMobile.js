import './BtnMobile.scss'
export const BtnMobile = ()=>{

  const btn = document.createElement('button');
  btn.textContent= 'X';
  btn.classList.add('btnMobile');
  btn.setAttribute('aria-label', 'desplegar menu mobile')

  return btn
}