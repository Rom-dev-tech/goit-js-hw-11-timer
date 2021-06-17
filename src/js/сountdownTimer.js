export default function Timer({ selector, targetDate }) {
  let id = 0;

  //* Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
  }

  function declOfNum(number, titles) {  
		let cases = [2, 0, 1, 1, 1, 2];  
		return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
	}
  
  const daysValue = document.querySelector(`${selector} [data-value="days"]`);
  const hoursValue = document.querySelector(`${selector} [data-value="hours"]`);
  const minsValue = document.querySelector(`${selector} [data-value="mins"]`);
  const secsValue = document.querySelector(`${selector} [data-value="secs"]`);

  const daysText = document.querySelector(`${selector} .time-count__days .time-count__text`);
	const hoursText = document.querySelector(`${selector} .time-count__hours .time-count__text`);
	const minutesText = document.querySelector(`${selector} .time-count__minutes .time-count__text`);
	const secondsText = document.querySelector(`${selector} .time-count__seconds .time-count__text`);

  this.start = () => {
        
        id = setInterval(() => {
          const diff = targetDate - Date.now();
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
          daysValue.textContent = addZero(days);
          hoursValue.textContent = addZero(hours);
          minsValue.textContent = addZero(mins);
          secsValue.textContent = addZero(seconds);

          daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
		      hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
		      minutesText.textContent = declOfNum(mins, ['минута', 'минуты', 'минут']);
		      secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
          // * Если событее прошло
          if (diff < 0) {
            clearInterval(id);
              id = 0;
            document.querySelector(selector).innerHTML = `<p class="end">EXPIRED</p>`;
  }
        }, 100);
    };
}
