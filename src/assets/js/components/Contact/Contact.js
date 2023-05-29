import { tempContainer } from '../../utils/tempContainer';
import './Contact.scss'

export const Contact = () =>{

  const dataContact = [
    {
      type: 'text',
      name: 'name',
      description: 'Nombre'
    },
    {
      type: 'email',
      name: 'email',
      description: 'Correo'
    },
    {
      type: 'number',
      name: 'age',
      description: 'Edad'
    },
    {
      type: 'tel',
      name: 'phone',
      description: 'Número celular'
    }
  ];

  const section =
  `<section class="contact">
    <header>
      <h2 class="contact-title ">Contactos</h2>
    </header>
    <div class="contact-content">

      <form class="form" action="">

      ${
        dataContact.map((data)=>{

          const {type, name , description} = data;

          return(`
            <div class="form-subContainer">
              <label for=${name} class="form-question">${description} :</label>
              <input autocomplete="off" type=${type} id=${name} name=${name} class="form-answer" required>
            </div>
          `);
        }).join("")
      }
      <div class="form-subContainer">
        <label for="comment" class="form-question">Comentarios :</label>
        <textarea name="comment" id="comment" class="form-answer form-answer--min-h"></textarea>
      </div>

      <div class="form-pyc">
        <input type="checkbox" id="pyc" name="pyc"  class="form-check" value="true" required>
        <label for="pyc" class="form-labelPyc">
          <a class="form-link" href="#">Términos y condiciones</a>
        </label>
      </div>

      <div class="formsBtn">
        <input id="submit" class="formsBtn-btn" type="submit" >
        <input id="reset" class="formsBtn-btn" type="reset" >
      </div>

      </form>
    </div>
  </section>
  `;

  const tag = tempContainer(section);
  return tag;
}
