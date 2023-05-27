import './app.scss'
import {addContent} from './src/assets/js/utils/addContent';
import { Header } from './src/assets/js/components/Header/Header';
import { main } from './src/Pages/main/main'

(()=>{

  //Header agregado
  addContent('body', Header());
  //main Agregado
  main();

})();