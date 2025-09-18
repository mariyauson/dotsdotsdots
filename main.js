/* ` ` ` ` ` ` ` ` ` 
    create canvas
 ` ` ` ` ` ` ` ` ` */
 let horizontalBoxes = 16
 let verticalBoxes = 16;
 const container = document.getElementById('container');
 let continuous = false;    // continuous mode toggle
 let gridSize = 16;

for (let i = 0; i < horizontalBoxes * verticalBoxes; i++) {
  let box = document.createElement('div');
  box.classList.add('parallelograms');
  container.appendChild(box);
}
attachColorEvents();

 
 /* ` ` ` ` ` ` ` ` ` 
     make colors
 ` ` ` ` ` ` ` ` ` */

 let currentColor = '#111';

function generateRandomColor() {
  return '#' + Math.floor(Math.random() * 16 ** 6).toString(16).padStart(6,'0');
}

function colorCell(e) {
  const cell = e.target;
  if (currentColor === 'random') {
    cell.style.backgroundColor = generateRandomColor();
  } else {
    cell.style.backgroundColor = currentColor;
  }
}

 /* ` ` ` ` ` ` ` ` ` 
     choose color
 ` ` ` ` ` ` ` ` ` */
document.querySelectorAll('.color-choice').forEach(button => {
  button.addEventListener('click', () => {
    const color = button.dataset.color;
    currentColor = color === 'random' ? 'random' : color;
  });
});

 
 /* ` ` ` ` ` ` ` 
  reset button
  ` ` ` ` ` ` ` */
 
 function resetGrid() {
   document.querySelectorAll('.parallelograms').forEach(cell => {
     cell.style.backgroundColor = '#eee';
   });
 }

  /* ` ` ` ` ` ` ` 
  dynamic grid
   ` ` ` ` ` ` ` */
 function buildGrid(size) {
   container.innerHTML = ''; // clear existing grid
   container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
   container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

   for (let i = 0; i < size * size; i++) {
     let cell = document.createElement('div');
     cell.classList.add('parallelograms');
     container.appendChild(cell);
   }
   attachColorEvents();
 }

 function attachColorEvents() {
   const cells = document.querySelectorAll('.parallelograms');
 
   cells.forEach(cell => {
     // remove all previous listeners
     const newCell = cell.cloneNode(true);
     cell.replaceWith(newCell);
   });

   const updatedCells = document.querySelectorAll('.parallelograms');
   updatedCells.forEach(cell => {
     if (continuous) {
       cell.addEventListener('mouseover', colorCell);
     } else {
       cell.addEventListener('click', colorCell);
     }
   });
 }

function changeGridSize() {
  const newSize = parseInt(prompt('Enter new grid size (max 64):', gridSize));
  if (!isNaN(newSize) && newSize > 0 && newSize <= 64) {
    gridSize = newSize;
    buildGrid(gridSize);
  } else {
    alert('Please enter a number between 1 and 64');
  }
}

function toggleContinuous() {
  continuous = !continuous;
  document.getElementById('continuousBtn').textContent = continuous ? 'Continuous: ON' : 'Continuous: OFF';
  attachColorEvents();
}

// build the initial grid on load
buildGrid(gridSize);

 
 
 /* ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` 
 things that didn't work out
 ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` 
   function changeColor(div) {
    div.style.background = generateRandomColor();
    let black = document.getElementById('black');
    black.onclick = function() {
    div.style.background = '#111';
  } 
  }
   let grabBoxAndChangeColor = document.querySelectorAll('.parallelograms');
  grabBoxAndChangeColor.forEach(div=>div.addEventListener('click', ()=>changeColor(div)));
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
 
 
