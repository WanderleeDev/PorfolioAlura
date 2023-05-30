const regexList = {
  name:  [
    /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/,
    'Sin caracteres especiales, números o símbolos.'
  ],
  email: [
    /^[\w\.\-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    ' El formato de correo electrónico invalido.'
  ] ,
  age: [
    /^(1[89]|[2-9]\d)$/,
    'Solo mayores de edad.'
  ],
  phone:  [
    /^\d{9}$/, 
    '9 dígitos sin espacios solo números'
  ],
  comment:  [
    /^[A-Za-z0-9\s]+$/,
    'Sin caracteres especiales, números o símbolos.'] 
}

export function filtrarPorRegex(target) {

  target.forEach((t) => {
    const key = t.getAttribute("name");

    t.addEventListener("keyup", () => {
      const regex = new RegExp(regexList[key][0]);
      const invalid = regexList[key][1];
      const sibling = t.nextElementSibling;

      if (regex.test(t.value)) {
        sibling.textContent = '* Formato valido';
        sibling.classList.add("valid");
        sibling.classList.remove("invalid");

      } else {
        sibling.textContent = invalid;
        sibling.classList.remove("valid");
        sibling.classList.add("invalid");
      }
    });
  });
}
