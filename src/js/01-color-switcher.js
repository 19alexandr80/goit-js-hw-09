const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
console.log(buttonStart);
console.log(buttonStop);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
buttonStart.addEventListener('click', onBodyStyle);
function onBodyStyle() {
  weer = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  console.log('kkkkkkkkkkk');
  buttonStart.removeEventListener('click', onBodyStyle);
}
buttonStop.addEventListener('click', () => {
  clearInterval(weer);
  buttonStart.addEventListener('click', onBodyStyle);
});
