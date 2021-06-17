export default class Timer {
  constructor({ selector, targetDate }) {
    this.intervalId = null;
    this.isActive = false;
    this.targetDate = targetDate;
    this.timeCountdawn();

    // Рефы
    this.daysValue = document.querySelector(`${selector} [data-value="days"]`);
    this.hoursValue = document.querySelector(`${selector} [data-value="hours"]`);
    this.minsValue = document.querySelector(`${selector} [data-value="mins"]`);
    this.secsValue = document.querySelector(`${selector} [data-value="secs"]`);

    this.daysText = document.querySelector(`${selector} .time-count__days .time-count__text`);
    this.hoursText = document.querySelector(`${selector} .time-count__hours .time-count__text`);
    this.minutesText = document.querySelector(`${selector} .time-count__minutes .time-count__text`);
    this.secondsText = document.querySelector(`${selector} .time-count__seconds .time-count__text`);
  }

  timeCountdawn = () => {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    this.intervalId = setInterval(() => {
      const diff = this.targetDate - Date.now();
      const time = this.getTimeComponents(diff);
      this.valueClockFace(time);

      // * Если событее прошло
      if (diff < 0) {
        clearInterval(this.intervalId);
        this.isActive = false;
        document.querySelector(selector).innerHTML = `<p class="end">EXPIRED</p>`;
      }
    }, 1000);
  };

  // Функция обработки на дни часы минуты и секунды
  getTimeComponents(time) {
    const days = this.addZero(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.addZero(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.addZero(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = this.addZero(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, seconds };
  }

  //* Add Zeros
  addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
  }

  // Функция для лайблов
  declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  }

  // Отресовка
  valueClockFace({ days, hours, mins, seconds }) {
    this.daysValue.textContent = days;
    this.hoursValue.textContent = hours;
    this.minsValue.textContent = mins;
    this.secsValue.textContent = seconds;

    this.daysText.textContent = this.declOfNum(days, ['день', 'дня', 'дней']);
    this.hoursText.textContent = this.declOfNum(hours, ['час', 'часа', 'часов']);
    this.minutesText.textContent = this.declOfNum(mins, ['минута', 'минуты', 'минут']);
    this.secondsText.textContent = this.declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
  }
}
