import './AboutMe.scss'
import { tempContainer } from '../../utils/tempContainer';

export const AboutMe = ()=>{

  const section = `
  <section class="aboutMe">
      <header class="aboutMe-header">
        <h2 class="aboutMe-title neonStyleBase">Sobre mi</h2>
      </header>
      <div class="aboutMe-content">
        <p class="aboutMe-description">
          Comprometido con mis ideales
          (<span>trabajo en equipo</span>,
          <span>compañerismo</span>,
          <span>sinceridad</span> y 
          <span>ganas de aprender y enseñar</span>), escogí este camino por su exigencia y constante cambio.
        </p>
      </div>
    </section>
  `;

  const tag = tempContainer(section);
  return tag;
}