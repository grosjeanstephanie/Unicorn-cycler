
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

/*
  Put the JavaScript code you want below.
*/
import images from './images/*.jpg';

let i = 1;
document.querySelector(".contenu").src = images['unicorn0'];

setInterval(() =>{
  document.querySelector(".contenu").src = images['unicorn'+i];
  i++;
  i %= Object.keys(images).length;
},3000);

