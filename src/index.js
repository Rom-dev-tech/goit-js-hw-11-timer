// import './css/common.css';
import CountdownTimer from './js/сountdownTimer';


const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('jan 01, 2022'),
});
timer.start();