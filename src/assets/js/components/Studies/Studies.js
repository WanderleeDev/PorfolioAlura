import { tempContainer } from '../../utils/tempContainer';
import './Studies.scss'

export const Studies = () => {

  const cards = [
    {
      img: "https://www.dropbox.com/s/krzabwxoojxcozg/freecodecamp-seeklogo.com.svg?raw=1",
      courses: ['Web Responsive', 'Algoritmos de JS'],
      alt: 'FreeCodeCamp'
    },
    {
      img: "https://www.dropbox.com/s/3kgfdb1ujnyjd3z/alura.svg?raw=1",
      courses: ['Frontend Developer', 'Soft skills'],
      alt: 'Alura'
    },
    {
      img: "https://www.dropbox.com/s/cz4h2dshncbdpeo/Platzi.svg?raw=1",
      courses: ['TailwindCss', 'Git y GitHub'],
      alt: 'Platzi'
    }
  ];
  

  const section =  `
  <section id="studiesSection" class="studiesSection">
      <header>
        <h2 class="studiesSection-title">Estudios</h2>
      </header>
      <div class="studiesSection-container">

      ${
        cards.map((card)=>{
        
          const {img, courses, alt}=card;
          
          return(`
            <figure class="studyCard">
              <div class="studyCard-content  studyContainer__content--blue">
                <img loading="lazy" class="studyCard-img" src=${img} alt=${alt}>
                <ul class="studyCard-list">
                  ${
                    courses.map((course)=>{
                      return(`<li class="studyCard-item">${course}</li>`)
                    }).join("")     
                  }
                  <li class="studyCard-item">
                    <a class="studyCard-link" title="mas detalles" aria-label="Ver información de los estudios a detalle" href="#">
                      &plus;
                    </a>
                  </li>
                </ul>
              </div>
              <figcaption class="studyCard-title">${alt}</figcaption>
            </figure>
          `);
        }).join("")
      }
      </div>
    </section>
  `;

  const tag = tempContainer(section);
  return tag;
}
