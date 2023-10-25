import Notiflix from 'notiflix';



const form = document.querySelector('.form');
const amountInput = form.elements['amount'];
const firstDelay = form.elements['delay'];
const stepDelay = form.elements['step'];
form.addEventListener('submit',handlerSubmit);

function handlerSubmit (evt) {
  evt.preventDefault();
  let delay = Number(firstDelay.value);
  const step = Number(stepDelay.value);
  const amount = Number(amountInput.value);
  


function createPromise(position, delay) {
  return new Promise ((res,rej)=>{
    setTimeout(()=> {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res({position,delay});
      } else {
        rej({position,delay});
      }
    },delay);
  });
}

for (let i = 1; i <= amount; i++){
  createPromise(i, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`); 
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`); 
      });
      delay += step;
}
};

