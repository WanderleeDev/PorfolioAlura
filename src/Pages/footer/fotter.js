import './footer.scss'
import { tempContainer } from "../../assets/js/utils/tempContainer";
import { SocialMedia } from "../../assets/js/components/SocialMedia/SocialMedia";

export const footer = ()=> {

  const toolList = [
    {
      title: 'HTML',
      img: 'https://www.dropbox.com/s/ofc7xlzesb76tgj/html.svg?raw=1',
    },
    {
      title: 'Sass',
      img: 'https://www.dropbox.com/s/23ptoa7wz1xc5ij/sassLogo.svg?raw=1',
    },
    {
      title: 'Javascript',
      img: 'https://www.dropbox.com/s/aejeipykc2zqal0/js.svg?raw=1',
    },
    {
      title: 'Vite',
      img: 'https://www.dropbox.com/s/wa4a1etvjpx0cdo/vitejs.svg?raw=1',
    },
    {
      title: 'Ubuntu',
      img: 'https://www.dropbox.com/s/w4iedws5nf8w1uq/ubuntu-logo.svg?raw=1',
    },
    {
      title: 'Git',
      img: 'https://www.dropbox.com/s/h8ypv2xpkzn9b2s/git.svg?raw=1',
    }
  ]

  const section = `
  <footer id="footer" class="footer">
      <article class="footer-autor">
        <h3 class="footer-subTitle">Info</h3>
        <div class="footer-autorData">
          <span>Autor: </span>
          <p>Wanderlee Max</p>
        </div>
        <div class="footer-autorData">
          <span>Actualización: </span>
          <p>Última fecha 29/05/23</p>
        </div>
        <div class="footer-autorData">
          <span>Extra: </span>
          <p>Proyecto realizado para desafió de Alura Next Education </p>
        </div>
      </article>

      <article class="footer-tools">
        <h3 class="footer-subTitle">Herramientas  usadas</h3>
        <ul class="toolList">

          ${
            toolList.map((list)=>{

              const {title, img} = list;

              return(`
              <li class="toolList-item">
                <img class="toolList-img" src=${img} alt=${title} title=${title}>
              </li>
              `);
            }).join("")
          }
          
        </ul>
      </article>

      <article class="footer-socialMedia">
        <h3 class="footer-subTitle">Redes</h3>
        ${SocialMedia().outerHTML}
      </article>
      <p class="footer-copy" >Desarrollado por Wanderlee Max - 2023</p>
    </footer>
  `;

  const tag = tempContainer(section);

  return tag;
}