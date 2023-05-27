import './Skills.scss'
import { tempContainer } from '../../utils/tempContainer';

export const Skills = () =>{

  const dataSkill =[
    {
      imgUrl: "https://www.dropbox.com/s/ofc7xlzesb76tgj/html.svg?raw=1",
      title: "Html",
      color: 'orange'
    },
    {
      imgUrl: "https://www.dropbox.com/s/ylskmegkpwxkstm/css.svg?raw=1",
      title: "Css",
      color: 'blue'
    },
    {
      imgUrl: "https://www.dropbox.com/s/aejeipykc2zqal0/js.svg?raw=1",
      title: "Javascript",
      color: 'yellow'
    },
    {
      imgUrl: "https://www.dropbox.com/s/23ptoa7wz1xc5ij/sassLogo.svg?raw=1",
      title: "Sass",
      color: 'fucsia'
    },
    {
      imgUrl: "https://www.dropbox.com/s/h8ypv2xpkzn9b2s/git.svg?raw=1",
      title: "Git",
      color: 'orange'
    },
    {
      imgUrl: "https://www.dropbox.com/s/ommxuufu8dd22di/tailwind.svg?raw=1",
      title: "TailwindCss",
      color: 'aquamarine'
    }
  ]

  const section = `
  <section class="skills">
    <header>
      <h2 class="skills-title">Skills</h2>
    </header>
    <div class="skills-container">
    ${
      dataSkill.map((skill)=>{

        const {imgUrl, title, color} = skill;

        return(`       
        <figure class="container-card container-card--${color}">
          <img loading="lazy" class="container-img" src=${imgUrl} alt="logo ${title}">
          <figcaption class="container-subTitle">${title}</figcaption>
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