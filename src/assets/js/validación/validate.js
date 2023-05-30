import { filtrarPorRegex} from "./regex";

function addClass(tagTarget) {
  tagTarget.addEventListener("focusin", (event) => {

    if (event.target.classList.contains("form-answer")) {
      event.preventDefault();
      const input = event.target;

      const sibling = input.previousElementSibling;
      sibling.classList.add("moveUp");

      input.addEventListener("blur", () => {
        input.value === "" ? sibling.classList.remove("moveUp") : null;
      });
    }
  });
}

//Al restablecer el formulario se restablecen sus estilos
function restarForm(tagTarget, newList) {
  tagTarget.addEventListener("click", (event) => {
    
    if (event.target.id === "reset") {
      newList.forEach((i) => {
        const siblingInput = i.previousElementSibling;
        siblingInput.classList.remove("moveUp");
      });
    }
  });
}


export const validateForm = (target) => {
  const form = target.querySelector(".form");
  const inputs = target.querySelectorAll(".form-answer");

  addClass(form);
  
  restarForm(form, inputs);

  filtrarPorRegex(inputs);
};