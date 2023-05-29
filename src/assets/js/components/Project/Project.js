import './Project.scss'
import { tempContainer } from '../../utils/tempContainer';

export const Project = () => {

  const dataProjects = [
    {
      img: "https://www.dropbox.com/s/kzr3kb4u2ly9h7l/encryptAlura.webp?raw=1",
      alt: 'Encriptador Alura',
      skills: ['Html, CSS, JS'],
      web: "https://encriptador-alura-teal.vercel.app/",
      repository: "https://github.com/WanderleeDev/Encriptador-Alura"
    },
    {
      img: "https://www.dropbox.com/s/dh9dy1rb749umhu/webBirds.webp?raw=1",
      alt: 'Web Birds',
      skills: ['Html, CSS, Metodología BEM'],
      web: "https://web-birds.vercel.app/",
      repository: "https://github.com/WanderleeDev/web-birds"
    },
    {
      img: "https://www.dropbox.com/s/wkzqhlskb4pb3y0/firstPageTailwind.webp?raw=1",
      alt: 'Tailwind Page',
      skills: ['Html, TailWind, JS'],
      web: "https://page-tailwind.vercel.app/",
      repository: "https://github.com/WanderleeDev/Page-tailwind"
    },
    {
      img: "https://www.dropbox.com/s/s6hf8djh11hkgou/tailwindPageAcecombat2Night_1.webp?raw=1",
      alt: 'Tailwind Page 2',
      skills: ['Html, Tailwind, JS'],
      web: "https://wanderleedev.github.io/Acecombat-Page--TailwindCSS/",
      repository: "https://github.com/WanderleeDev/Acecombat-Page--TailwindCSS"
    }

  ]

  const section = `
  <section class="sectionProject">
    <header>
      <h2 class="sectionProject__title">
        <span class="title__letter">P</span>
        <span class="title__letter">r</span>
        <span class="title__letter">o</span>
        <span class="title__letter">y</span>
        <span class="title__letter">e</span>
        <span class="title__letter">c</span>
        <span class="title__letter">t</span>
        <span class="title__letter">o</span>
        <span class="title__letter">s</span>
      </h2>
    </header>
    <div class="projectContainer">

      ${
        dataProjects.map((data)=>{
          
          const {img, alt, skills, web ,repository} =data;

          return(`
          <figure class="project">
            <figcaption class="project__auxiliaryText">Web Birds</figcaption>
            <div class="project__containerImg">
              <img loading="lazy" src=${img} alt="imagen de pagina ${alt}" class="project__img">
            </div>

            <div class="btnContainer">
              <button class="btnContainer__btn" aria-label="Ir a la ${alt}">
                <a target="_blank" href=${web} class="btnContainer__link" rel="noopener">Ver sitio</a>
              </button>
              <button class="btnContainer__btn aria-label="Ver repositorio de ${alt}">
                <a target="_blank" href=${repository} class="btnContainer__link">Ver repo</a>
              </button>
            </div>
          </figure>
          `)
        }).join("")
      }
      
    </div>
  </section>
  `;

  const tag = tempContainer(section); 
  return tag;
}
