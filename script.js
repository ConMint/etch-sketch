let grid = document.querySelector('#grid');
// grid.style.gridTemplateColumns = 'repeat(16,1fr)';
// grid.style.gridTemplateRows = 'repeat(16,1fr)';
grid.style.backgroundColor ='grey'
let resetButton = document.querySelector('#resetbutton');
let eraseButton = document.querySelector('#erasebutton');
let blackButton = document.querySelector('#blackbutton');
let randomButton = document.querySelector('#randombutton');
let pickButton = document.querySelector('#pickbutton');
let sizeButton = document.querySelector('#sizebutton');
let backgroundButton = document.querySelector('#backgroundbutton');
let cells;

let randomColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)



function makeGrid(size) {
    // if (!size) {
    //     size = prompt('How big would you like to make the grid?')}
    grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
    grid.style.gridTemplateRows = `repeat(${size},1fr)`;
    for (i = 0; i < size * size; i++ ) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell)
    
    cells = document.querySelectorAll('.cell');
    
    }
    }


sizeButton.onclick = () => resize(size = prompt('Enter size'))

function resize(size) {
    clearGrid();
    makeGrid(size);
    penColor('black');
}


resetButton.onclick = () => reloadGrid()

eraseButton.addEventListener('click', function () {
    cells.forEach(cell => {
        cell.addEventListener('mouseover', e =>
        e.target.style.backgroundColor = newBack)

    })  
})

blackButton.addEventListener('click', () =>{
    penColor('black')
})

randomButton.addEventListener('click', function () {
     
    cells.forEach(cell => {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        
        cell.addEventListener('mouseover', e =>
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`)
    })
})

pickButton.addEventListener('click', () => {
    let newColor = prompt('What color would you like to use?')
    if (!newColor) {
        newColor = 'black'
    }
    penColor(newColor)
})

backgroundButton.addEventListener('click', () => {
    newBack = prompt('Enter a color','grey');
    clearGrid();
    makeGrid(16);
    grid.style.backgroundColor = newBack;
    
})



function clearGrid() {
    grid.innerHTML = ''
    }

function reloadGrid() {
    clearGrid()
    makeGrid(16)
    grid.style.backgroundColor = 'grey'
    newBack = 'grey'
    penColor('black')
    
    
}


function penColor(color) {
    cells.forEach(cell => {
        cell.addEventListener('mouseover', e =>
        e.target.style.backgroundColor = color)})
    
    
}




    
reloadGrid()

