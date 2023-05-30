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
    },
    {
      img: "https://www.dropbox.com/s/dspg91ouu6pyc4w/minMax.png?raw=1",
      alt: 'Minmax-number',
      skills: ['Html, Css, JS'],
      web: "https://wanderleedev.github.io/minmax-number/",
      repository: "https://github.com/WanderleeDev/minmax-number"
    }
  ]

  const section = `
  <section id="project" class="project">
    <header>
      <h2 class="project-title">
        <span class="title-letter">P</span>
        <span class="title-letter">r</span>
        <span class="title-letter">o</span>
        <span class="title-letter">y</span>
        <span class="title-letter">e</span>
        <span class="title-letter">c</span>
        <span class="title-letter">t</span>
        <span class="title-letter">o</span>
        <span class="title-letter">s</span>
      </h2>
    </header>
    <div class="project-container">

      ${
        dataProjects.map((data)=>{
          
          const {img, alt, skills, web ,repository} =data;

          return(`
          <figure class="project-card">
            <figcaption class="project-cardTitle">${alt}</figcaption>
            <div class="project-containerImg">
              <img loading="lazy" src=${img} alt="imagen de pagina ${alt}" class="project-cardImg">
            </div>

            <div class="btnContainer">
              <button class="btnContainer-btn" aria-label="Ir a la ${alt}">
                <a target="_blank" href=${web} class="btnContainer-link" rel="noopener">Ver sitio</a>
              </button>
              <button class="btnContainer-btn aria-label="Ver repositorio de ${alt}">
                <a target="_blank" href=${repository} class="btnContainer-link">Ver repo</a>
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
