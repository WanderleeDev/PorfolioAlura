export const btnClickMobile = (selectTarget,newClass) => {
  const target = document.querySelector(selectTarget);
  target.classList.toggle(newClass);
};