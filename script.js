const rows = document.querySelectorAll('.row');
// let box = document.createElement('div');
// box.textContent = 'i am a box';
// box.className ='box';




// for (i = 0; i <=3; i++ ) {
//     let box = document.createElement('div');
//     box.className ='box';
//      box.textContent = 'i am a box'
//     document.querySelectorAll('.row').appendChild(box)
// }

rows.forEach(row => {
    for (i = 0; i <=15; i++ ) {
        let box = document.createElement('div');
        box.className ='box';
        row.appendChild(box)
    }
})