export default class Timer {
  constructor({ selector, targetDate }) {
    this.intervalId = null;
    this.isActive = false;
    this.targetDate = targetDate;

    // Refs
    this.daysValue = document.querySelector(`${selector} [data-value="days"]`);
    this.hoursValue = document.querySelector(`${selector} [data-value="hours"]`);
    this.minsValue = document.querySelector(`${selector} [data-value="mins"]`);
    this.secsValue = document.querySelector(`${selector} [data-value="secs"]`);

    this.daysText = document.querySelector(`${selector} .time-count__days .time-count__text`);
    this.hoursText = document.querySelector(`${selector} .time-count__hours .time-count__text`);
    this.minutesText = document.querySelector(`${selector} .time-count__minutes .time-count__text`);
    this.secondsText = document.querySelector(`${selector} .time-count__seconds .time-count__text`);
    this.reset = document.querySelector(`${selector}`);

    // start
    this.startValueTime();
  }

  // for start markup
  startValueTime() {
    const diff = this.targetDate - Date.now();
    const time = this.getTimeComponents(diff);
    this.valueClockFace(time);
    this.timeCountdawn();
  }

  // time Countdawn
  timeCountdawn() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    this.intervalId = setInterval(() => {
      const diff = this.targetDate - Date.now();
      const time = this.getTimeComponents(diff);
      this.valueClockFace(time);

      // If the event has passed
      if (diff < 0) {
        clearInterval(this.intervalId);
        this.isActive = false;
        this.reset.innerHTML = `<p class="end">EXPIRED</p>`;
      }
    }, 1000);
  }

  // Time Components
  getTimeComponents(time) {
    const days = this.addZero(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.addZero(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.addZero(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = this.addZero(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, seconds };
  }

  // Add Zeros
  addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
  }

  // Denamic description of timer
  declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  }

  // Value for clock
  valueClockFace({ days, hours, mins, seconds }) {
    this.daysValue.textContent = days;
    this.hoursValue.textContent = hours;
    this.minsValue.textContent = mins;
    this.secsValue.textContent = seconds;

    this.daysText.textContent = this.declOfNum(days, ['day', 'days', 'days']);
    this.hoursText.textContent = this.declOfNum(hours, ['hour', 'hours', 'hours']);
    this.minutesText.textContent = this.declOfNum(mins, ['minute', 'minutes', 'minutes']);
    this.secondsText.textContent = this.declOfNum(seconds, ['second', 'seconds', 'seconds']);
  }
}
