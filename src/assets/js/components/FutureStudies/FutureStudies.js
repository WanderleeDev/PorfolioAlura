import './FutureStudies.scss'
import { tempContainer } from '../../utils/tempContainer';
import { Noria } from '../Noria/Noria';
import { updateContent } from '../../utils/updateContent';

export const FutureStudies = ()=>{

  const noria = Noria();

  const section =
  `
  <section id="futureStudies" class="futureStudies">
      <header>
        <h2 class="futureStudies-title">Plan de estudios a futuro</h2>
      </header>
      ${noria.outerHTML}
    </section>
  `;

  const tag = tempContainer(section);
  updateContent(tag);
  
  return tag;
}