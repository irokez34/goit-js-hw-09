
import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";  


const refs = 
  {
  timePicker : document.querySelector('#datetime-picker'),
  btn : document.querySelector('[data-start]'),
  timerDate : document.querySelector('.timer'),
  days: document.querySelector('[data-days]'),
  hours : document.querySelector('[data-hours]'),
  minutes : document.querySelector('[data-minutes]'),
  seconds : document.querySelector('[data-seconds]'),
  }
  const {timePicker, btn, timerDate, days, hours, minutes, seconds} = refs;
  btn.disabled = true;

  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
  }

  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    
      console.log(selectedDates[0]);
     const selectDate =  selectedDates[0];
     if (selectDate.getTime() <= options.defaultDate.getTime()) Notiflix.Notify.warning('Please choose a date in the future'); 
      
      else {
       btn.disabled = false;
       let timerInterval;
        btn.addEventListener('click',handlerStart)
        function handlerStart (evt) {
         
          let timer = selectDate.getTime() - options.defaultDate.getTime();
         
          
          timerInterval =  setInterval(() => {
            if (timer > 0) {
              timer -= 1000;
              const timeData = convertMs(timer);
              days.textContent = addLeadingZero(timeData.days);
              hours.textContent = addLeadingZero(timeData.hours);
              minutes.textContent = addLeadingZero(timeData.minutes);
              seconds.textContent = addLeadingZero(timeData.seconds);

            }
            else clearInterval(timerInterval);
           
          }, 1000);
        }
     } 
    },
  };
 function  addLeadingZero (value) {
  return value.toString().padStart(2, '0');
 }
  flatpickr(timePicker, options);
