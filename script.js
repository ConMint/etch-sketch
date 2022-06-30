let grid = document.querySelector('#grid');
// grid.style.gridTemplateColumns = 'repeat(16,1fr)';
// grid.style.gridTemplateRows = 'repeat(16,1fr)';
grid.style.backgroundColor ='grey'
let resetButton = document.querySelector('#resetbutton');
let eraseButton = document.querySelector('#erasebutton');
let blackButton = document.querySelector('#blackbutton');
let randomButton = document.querySelector('#randombutton');
let cells;

let randomColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)



function makeGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
    grid.style.gridTemplateRows = `repeat(${size},1fr)`;
    for (i = 0; i < size * size; i++ ) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell)
    cell.addEventListener('mouseover', e =>
    e.target.classList.add('active'))
    cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', e =>
        e.target.classList.add('active'))
    })
    }
}

// cells = document.querySelectorAll('.cell');
//     cells.forEach(cell => {
//         cell.addEventListener('mouseover', e =>
//         e.target.classList.add('active'))
//     })


resetButton.onclick = () => reloadGrid()

eraseButton.addEventListener('click', function () {
    cells.forEach(cell => {
        cell.addEventListener('mouseover', e =>
        e.target.style.backgroundColor = 'grey')

    })  
})

blackButton.addEventListener('click', function () {
    cells.forEach(cell => {
        cell.addEventListener('mouseover', e =>
        e.target.style.backgroundColor = 'black')

    })  
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


function clearGrid() {
    grid.innerHTML = ''
    }

function reloadGrid() {
    clearGrid()
    makeGrid(16)
    cells.forEach(cell => {
        cell.addEventListener('mouseover', e =>
        e.target.style.backgroundColor = 'black')})
    
    
}
    
reloadGrid()