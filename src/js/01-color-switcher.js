function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

const body = document.querySelector("body");
const start = document.querySelector( "[data-start]" );
const stop = document.querySelector('[data-stop]');
let timeId = null;

start.addEventListener('click',handlerStart);

function handlerStart (evt){
    evt.preventDefault();
    start.setAttribute('disabled','true');
    stop.removeAttribute('disabled');
    timeId = setInterval(()=> {
        body.style.backgroundColor  = getRandomHexColor();
    },1000);
}

stop.addEventListener('click', handlerStop)


function handlerStop(evt) {
    start.removeAttribute('disabled');
    clearInterval(timeId);
    stop.setAttribute('disabled','true');

}