import './main.scss'
import { Presentation } from '../../assets/js/components/Presentation/Presentation';
import { AboutMe } from '../../assets/js/components/AboutMe/AboutMe';
import { Skills } from '../../assets/js/components/Skills/Skils';
import { FutureStudies } from '../../assets/js/components/FutureStudies/FutureStudies';
import { Studies } from '../../assets/js/components/Studies/Studies';
import { Project } from '../../assets/js/components/Project/Project';
import { addContent } from "../../assets/js/utils/addContent";
import { Contact } from '../../assets/js/components/Contact/Contact';
import { footer } from '../footer/fotter';



export const main = () => {
  addContent('#app', Presentation());
  addContent('#app', AboutMe(),'beforeend');
  addContent('#app', Skills(), 'beforeend');
  addContent('#app', FutureStudies(), 'beforeend');
  addContent('#app', Studies(), 'beforeend');
  addContent('#app', Project(), 'beforeend')
  addContent('#app', Contact(), 'beforeend')
};