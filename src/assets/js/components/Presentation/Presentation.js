import './Presentation.scss'
import { SocialMedia } from '../SocialMedia/SocialMedia';
import { tempContainer } from '../../utils/tempContainer';
export const Presentation = () =>{
  const imgUrl = "https://www.dropbox.com/s/uyv3evu3sh28lw0/meme-gato-optimizado.jpg?dl=0";

  const section = `
    <section id="presentation" class="presentation">
    <header>
      <h1 class="presentation-title">Whoami<span>?</span>
      </h1>
    </header>
      <img class="presentation-img" src=${imgUrl.replace('dl=0','raw=1')} alt="foto personal">
      <p class="presentation-description">
        ¡ Hello World ! aquí <span>Wanderlee Max</span>  estudiante de programación en Oracle Next Education
      </p>
      ${SocialMedia().outerHTML}
    </section>
  `;

  const tag = tempContainer(section);
  return tag;
}