import './Header.scss';
import { BtnMobile } from '../BtnMobile/BtnMobile';
import { btnClickMobile } from '../../utils/btnClickMobile';

export const Header = () => {
  const listContent = ['Sobre mi', 'Skills', 'Formación', 'proyectos'];
  const img = "https://www.dropbox.com/s/mh06en7jmquu4gd/logo.svg?dl=0";

  const btn = BtnMobile();


  const header = `
    <header class="header">
      <img loading="lazy" class="header-img" href=${img.replace('dl=0', 'raw=1')}/>
      ${btn.outerHTML}
      <nav class="navbar">
        <ul class="navbar-list">
          ${listContent
            .map(
              (content) => `
                <li class="navbar-item">
                  <a class="navbar-link" href="#">
                    ${content}
                  </a>
                </li>
              `
            )
            .join('')}
        </ul>
      </nav>
    </header>
  `;

  const tempContainer = document.createElement('div');
  tempContainer.innerHTML = header.trim();

  const headerElement = tempContainer.firstChild;
  
  //selección del btn 
  const btnElement = headerElement.querySelector('.btnMobile');
  
  //evento escucha agregado
  btnElement.addEventListener('click', ()=> btnClickMobile('.navbar', 'appearMenu'));

  return headerElement;
};