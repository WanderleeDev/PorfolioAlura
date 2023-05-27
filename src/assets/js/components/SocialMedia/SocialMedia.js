import './SocialMedia.scss'
import { tempContainer } from "../../utils/tempContainer";
export const SocialMedia = () => {

  const dataIcon = [
    {
      svg: ' <svg class="socialMedia-svg" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>',
      title: "Ir GitHub",
      link: "https://github.com/WanderleeDev",
    },
    {
      svg: ' <svg class="socialMedia-svg" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>',
      title: "Ir Linkedin",
      link: "https://www.linkedin.com/in/wanderlee-max/",
    },
    {
      svg: '<svg class="socialMedia-svg" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />  <polyline points="14 2 14 8 20 8" />  <line x1="16" y1="13" x2="8" y2="13" />  <line x1="16" y1="17" x2="8" y2="17" />  <polyline points="10 9 9 9 8 9" /></svg>',
      title: "Descargar CV",
      link: "#",
    }
  ];

  const social = `
    <div class="socialMedia">
    ${dataIcon
      .map(
        (icon) =>{
          const {link, svg, title} =icon;

          return (
            `<a class="socialMedia-link" href=${link} title=${title}>
              ${svg}
            </a>`
          )
        } 
      )
      .join("")}
      </div>
      `;

      const component = tempContainer(social);

      return component;
};
