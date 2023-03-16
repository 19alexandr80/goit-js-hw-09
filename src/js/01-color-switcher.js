const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
buttonStop.setAttribute('disabled', 'disabled');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
buttonStart.addEventListener('click', onBodyStyle);
let spacingVariable = null;

function onBodyStyle() {
  buttonStop.removeAttribute('disabled');
  buttonStart.setAttribute('disabled', 'disabled');
  body.style.backgroundColor = getRandomHexColor();
  spacingVariable = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  // buttonStart.removeEventListener('click', onBodyStyle);
}
buttonStop.addEventListener('click', () => {
  buttonStart.removeAttribute('disabled');
  buttonStop.setAttribute('disabled', 'disabled');
  clearInterval(spacingVariable);
  // buttonStart.addEventListener('click', onBodyStyle);
});
