export default class Timer {
  constructor({ selector, targetDate }) {
    this.intervalId = null;
    this.isActive = false;
    this.targetDate = targetDate;

    // Refs
    this.daysValueRefs = document.querySelector(`${selector} [data-value="days"]`);
    this.hoursValueRefs = document.querySelector(`${selector} [data-value="hours"]`);
    this.minsValueRefs = document.querySelector(`${selector} [data-value="mins"]`);
    this.secsValueRefs = document.querySelector(`${selector} [data-value="secs"]`);

    this.daysTextRefs = document.querySelector(`${selector} .time-count__days .time-count__text`);
    this.hoursTextRefs = document.querySelector(`${selector} .time-count__hours .time-count__text`);
    this.minutesTextRefs = document.querySelector(
      `${selector} .time-count__minutes .time-count__text`,
    );
    this.secondsTextRefs = document.querySelector(
      `${selector} .time-count__seconds .time-count__text`,
    );
    this.resetRefs = document.querySelector(`${selector}`);

    // start
    this.startValueTime();
  }

  // for start markup
  startValueTime() {
    const diff = this.targetDate - Date.now();

    if (diff < 0) {
      this.resetRefs.innerHTML = `<p class="end">EXPIRED</p>`;
    }

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

      // If the event has passed
      if (diff < 0) {
        clearInterval(this.intervalId);
        this.isActive = false;
        this.resetRefs.innerHTML = `<p class="end">EXPIRED</p>`;
      }

      const time = this.getTimeComponents(diff);
      this.valueClockFace(time);
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
    this.daysValueRefs.textContent = days;
    this.hoursValueRefs.textContent = hours;
    this.minsValueRefs.textContent = mins;
    this.secsValueRefs.textContent = seconds;

    this.daysTextRefs.textContent = this.declOfNum(days, ['day', 'days', 'days']);
    this.hoursTextRefs.textContent = this.declOfNum(hours, ['hour', 'hours', 'hours']);
    this.minutesTextRefs.textContent = this.declOfNum(mins, ['minute', 'minutes', 'minutes']);
    this.secondsTextRefs.textContent = this.declOfNum(seconds, ['second', 'seconds', 'seconds']);
  }
}
