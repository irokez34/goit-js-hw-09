function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

const body = document.querySelector("body");
const start = document.querySelector( "[data-start]" );
const stop = document.querySelector('[data-stop]');
let timeId = null;

 function setAttrib (elem,attrib,status)  {
    elem.setAttribute(attrib,status);
}
function removeAttrib (elem,attrib) {
elem.removeAttribute(attrib);
}

start.addEventListener('click',handlerStart);

function handlerStart (evt){
    evt.preventDefault();
    setAttrib (start,'disabled','true');
    removeAttrib(stop,'disabled');
    timeId = setInterval(()=> {
        body.style.backgroundColor  = getRandomHexColor();
    },1000);
}

stop.addEventListener('click', handlerStop)


function handlerStop(evt) {
    
    setAttrib (stop,'disabled','true');
    removeAttrib(start,'disabled');
    clearInterval(timeId);
}