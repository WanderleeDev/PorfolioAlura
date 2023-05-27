import './main.scss'
import { Presentation } from '../../assets/js/components/Presentation/Presentation';
import { AboutMe } from '../../assets/js/components/AboutMe/AboutMe';
import { Skills } from '../../assets/js/components/Skills/Skils';
import { addContent } from "../../assets/js/utils/addContent";


export const main = () => {
  addContent('#app', Presentation());
  addContent('#app', AboutMe(),'beforeend');
  addContent('#app', Skills(), 'beforeend');
};