const output = document.querySelector('#output-text'),

    btn = document.querySelector('#btn');
    let input = document.querySelector('#user-input');
let number = [Math.floor(Math.random() * 100)];

btn.addEventListener('click', () => {
    let input = document.querySelector('#user-input').value;
    if (input == number) {
        output.innerHTML = `Great, the number you guessed ${number} is TRUE`;
    } else if (input > number) {
        output.innerHTML = `The number you entered is too high`;

    } else if (input<number) {
        output.innerHTML = `The number you entered is too low`;
    }

});

// input.addEventListener('keydown', (e)=>{
//     if (e.code === 'Enter') {
//         let input = document.querySelector('#user-input').value;
//         if (input == number) {
//             output.innerHTML = `Great, the number you guessed ${number} is TRUE`;
//         } else if (input > number) {
//             output.innerHTML = `The number you entered is too high`;
    
//         } else if (input<number) {
//             output.innerHTML = `The number you entered is too low`;
//         }
//     }
// });