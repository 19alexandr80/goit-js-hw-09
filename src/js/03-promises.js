import 'notiflix/dist/notiflix-3.2.6.min.css';
import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
let weer = null;
formEl.addEventListener('submit', onSubmit);
const con = {};
function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  formData.forEach((a, b) => {
    con[b] = a;
  });
  setTimeout(() => {
    weer = setInterval(promm, con.step);
    con.amaund = +con.delay;
  }, con.delay);
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
let amm = 0;
const promm = () => {
  if (+con.amount === amm) {
    clearInterval(weer);
    amm = 0;
    con.amaund = 0;
    return;
  }
  amm += 1;
  onPromise().then(onThen).catch(onCatch);
  if (amm !== 1) {
    con.amaund += +con.step;
  }
};
function onThen() {
  Notiflix.Notify.success(`✅ Fulfilled promise ${amm} in ${con.amaund}ms`, {
    timeout: 6000,
  });
}
function onCatch() {
  Notiflix.Notify.failure(`❌ Rejected promise ${amm} in ${con.amaund}ms`, {
    timeout: 6000,
  });
}
