import 'notiflix/dist/notiflix-3.2.6.min.css';
import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
let spacingVariable = null;
formEl.addEventListener('submit', onSubmit);
const userData = {};
function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  formData.forEach((a, b) => {
    userData[b] = a;
  });
  setTimeout(() => {
    spacingVariable = setInterval(onPromiseCall, userData.step);
    userData.delayTime = Number(userData.delay);
  }, userData.delay);
}
const onPromise = () => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.4;
    if (shouldResolve) {
      resolve();
    }
    reject();
  });
};
let promiseCounter = 0;
const onPromiseCall = () => {
  if (Number(userData.amount) === promiseCounter) {
    clearInterval(spacingVariable);
    promiseCounter = 0;
    userData.delayTime = 0;
    return;
  }
  promiseCounter += 1;
  onPromise().then(onThen).catch(onCatch);
  if (promiseCounter !== 1) {
    userData.delayTime += Number(userData.step);
  }
};
function onThen() {
  Notiflix.Notify.success(
    `✅ Fulfilled promise ${promiseCounter} in ${userData.delayTime}ms`,
    {
      timeout: 6000,
    }
  );
}
function onCatch() {
  Notiflix.Notify.failure(
    `❌ Rejected promise ${promiseCounter} in ${userData.delayTime}ms`,
    {
      timeout: 6000,
    }
  );
}
