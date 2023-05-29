import './Noria.scss'
import { tempContainer } from '../../utils/tempContainer';

export const Noria = () =>{

  const dataNoria = [
    {
      img: "https://www.dropbox.com/s/j7dkh8krx7jwr58/bash.svg?raw=1",
      title: 'Bash'
    },
    {
      img: "https://www.dropbox.com/s/itjbpyqopo08o3v/nodejs.svg?raw=1",
      title: 'Node JS'
    },
    {
      img: "https://www.dropbox.com/s/2qf9grahx99gsmh/postcss.svg?raw=1",
      title: 'PostCss'
    },
    {
      img: "https://www.dropbox.com/s/tkkpwk93tyw4tim/dart.svg?raw=1",
      title: 'Dart'
    },
    {
      img: "https://www.dropbox.com/s/0q0vo2r5xmqezqh/react.svg?raw=1",
      title: 'React'
    },
    {
      img: "https://www.dropbox.com/s/vc0awsoi25osv6l/python.svg?raw=1",
      title: 'Python'
    },
    {
      img: "https://www.dropbox.com/s/p71afcs5nb1mybq/mongodb.svg?raw=1",
      title: 'Mongo DB'
    },
    {
      img: "https://www.dropbox.com/s/lqwvwdb6bco88uf/security.svg?raw=1",
      title: 'Cyber Seguridad '
    },
    {
      img: "https://www.dropbox.com/s/wa4a1etvjpx0cdo/vitejs.svg?raw=1",
      title: 'Vite'
    },
    {
      img: "https://www.dropbox.com/s/qoc4yrqoyqyaofy/typescript.svg?raw=1",
      title: 'Typescript '
    }
  ];

  const noria = `
  <div class="noria">
          <!-- central axis -->
          <div class="noria-ejeCentral">
          
          </div>
          <ul class="noria-containerBoxes">
          
          ${
            dataNoria.map((data)=>{

              const {img, title}= data;

              const liTag = document.createElement('li');
              liTag.classList.add('noria-box');

              const divTag = document. createElement('div');
              divTag.classList.add('noria-boxElements');

              const imgTag = document.createElement('img');
              imgTag.classList.add('noria-img');
              imgTag.setAttribute('loading', 'lazy');
              imgTag.setAttribute('src', img);
              imgTag.setAttribute('alt', title);
              imgTag.setAttribute('logo', `logo ${title}`);

              const paragraph = document.createElement('p');
              paragraph.classList.add('noria-text');
              paragraph.textContent = title;

              divTag.append(imgTag,paragraph);
              liTag.append(divTag);

              return liTag.outerHTML;
            }).join("")
          }

          </ul>
        </div>
  `;

  const component = tempContainer(noria);
  return component;
}