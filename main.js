
/* ` ` ` ` ` ` ` ` ` 
    create canvas
 ` ` ` ` ` ` ` ` ` */
 let horizontalBoxes = 16
 let verticalBoxes = 16;
 for(let i=0; i < horizontalBoxes*verticalBoxes; i++){
   let box = document.createElement('div');
   box.classList.add('parallelograms');
   document.getElementById('container').appendChild(box);
 }
 
 
 /* ` ` ` ` ` ` ` ` ` 
     make colors
 ` ` ` ` ` ` ` ` ` */
 function generateRandomColor() {
   return '#' + Math.floor(Math.random()*16**6).toString(16);
 }
 
 function changeColor(div) {
   div.style.background = generateRandomColor();
   let black = document.getElementById('black');
   black.onclick = function() {
   div.style.background = '#111';
 } 
 }
 
 
 let grabBoxAndChangeColor = document.querySelectorAll('.parallelograms');
 grabBoxAndChangeColor.forEach(div=>div.addEventListener('click', ()=>changeColor(div)));
 
 /* ` ` ` ` ` ` ` 
  reset button
  ` ` ` ` ` ` ` */
 
 function reset() {
   grabBoxAndChangeColor.style.background = 'white';
   document.getElementsByClassName('color-choice') == false;
 }
 
 
 
 
 
 
 
 
 
 
 /* ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` 
 things that didn't work out
 ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` 
 function changeColor(div) {
   div.style.background = generateRandomColor();
 }
  
 function changeColor(div) {
   if (document.getElementById('black').clicked == true) {
     let boxes = document.querySelectorAll('.parallelograms');
     for (let i = 0; i < boxes.length; i++) {
       boxes[i].style.background = generateBlack();
     }
   }
    div.style.background = generateBlack();
   }
   else if (document.getElementById('gray').clicked == true) {
     div.style.background = generateGray();
   } 
   else {
     div.style.background = generateRandomColor();
   }
 }
 */
 
 
 