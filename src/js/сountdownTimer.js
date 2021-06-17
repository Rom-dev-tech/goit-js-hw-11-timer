export default function Timer({ selector, targetDate }) {
  let id = 0;

  //* Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
  }
  
  const daysValue = document.querySelector(`${selector} [data-value="days"]`);
  const hoursValue = document.querySelector(`${selector} [data-value="hours"]`);
  const minsValue = document.querySelector(`${selector} [data-value="mins"]`);
  const secsValue = document.querySelector(`${selector} [data-value="secs"]`);

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
          
          // * Если событее прошло
          if (diff < 0) {
            clearInterval(id);
              id = 0;
            document.querySelector(selector).innerHTML = `<p class="end">EXPIRED</p>`;
  }
        }, 100);
    };
}
