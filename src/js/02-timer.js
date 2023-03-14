import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import Notiflix from 'notiflix';
flatpickr('#datetime-picker', {
  locale: {
    firstDayOfWeek: 1, // start week on Monday
  },
  defaultDate: [Date.now()],
  weekNumbers: true,
  enableTime: true,
  time_24hr: true,
  minuteIncrement: 1,
  onClose: onGetTime,
});
const start = document.querySelector('[data-start]');
let choisTime = 0;
function onGetTime(selectedDates) {
  choisTime = selectedDates[0] - Date.now();
  if (choisTime > 0) {
    start.addEventListener('click', etTime);
    start.classList.add('button-start');
  } else {
    Notiflix.Report.failure(
      'Please choose a date in the future',
      'Вибачте, але опция /timeMashine/ тимчасово не працює. Спробуйте пізніше',
      'OK'
    );
  }
}
let spacingVariable = null;
function etTime() {
  start.removeEventListener('click', etTime);
  start.classList.remove('button-start');
  spacingVariable = setInterval(convertMs, 1000, choisTime);
}
const tablo = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
let timer = 0;
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  ms -= timer;
  timer += 1000;
  const days = Math.floor(ms / day);
  tablo.days.innerHTML = String(days).padStart(2, '0');
  const hours = Math.floor((ms % day) / hour);
  tablo.hours.innerHTML = String(hours).padStart(2, '0');
  const minutes = Math.floor(((ms % day) % hour) / minute);
  tablo.minutes.innerHTML = String(minutes).padStart(2, '0');
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  tablo.seconds.innerHTML = String(seconds).padStart(2, '0');
  if (ms < 1000) {
    clearInterval(spacingVariable);
    timer = 0;
    document.querySelector('body').classList.add('body-style');
    Notiflix.Report.success(
      'SHOW START',
      'Вітаю, Ви перейшли на наступний рівень js розробника. Да прибуде з вами GOOGLE',
      'OK',
      () => {
        document.querySelector('body').classList.remove('body-style');
      }
    );
  }
}
