import './Header.scss';
import { BtnMobile } from '../BtnMobile/BtnMobile';
import { btnClickMobile } from '../../utils/btnClickMobile';
import { tempContainer } from '../../utils/tempContainer';
import miLogo from '../../../../../public/miLogo.svg'

export const Header = () => {
  const img = "https://www.dropbox.com/s/o4ilhdbp8si5ogx/miLogo.svg?raw=1";
  
  const listData= [
    {
      content: 'Sobre mi',
      id: 'presentation'
    },
    {
      content: 'Skills',
      id: 'skills'
    },
    {
      content: 'Formación',
      id: 'studiesSection'
    },
    {
      content: 'Proyectos',
      id: 'project'
    },
    {
      content: 'Contacto',
      id: 'contact'
    }
  ]

  const btn = BtnMobile();

  const header = `
    <header class="header">
      <img alt="logo page" loading="lazy" class="header-img" href=${miLogo}/>
      ${btn.outerHTML}
      <nav class="navbar">
        <ul class="navbar-list">
          ${listData
            .map(
              (data) =>{
              
              const {content, id} = data;

              return(`
                <li class="navbar-item">
                  <a class="navbar-link" href='#${id}'>
                    ${content}
                  </a>
                </li>
              `);
              })
            .join('')}
        </ul>
      </nav>
    </header>
  `;

  const tag = tempContainer(header);

  //selección del btn 
  const btnElement = tag.querySelector('.btnMobile');
  
  //evento escucha agregado
  btnElement.addEventListener('click', ()=> btnClickMobile('.navbar', 'appearMenu'));

  return tag;
};
