const keys = document.querySelector('.calculator__keys');

const key = e.target;
const action = key.dataset.action;

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        //do something

        if (!action) {
            console.log('number key!');
        }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            console.log('operator key!');
        }

        if (action === 'decimal') {
            console.log('decimal key!');
        }

        if (action === 'clear') {
            console.log('clear key!');
        }

        if (action === 'calculate') {
            console.log('equal key!');
        }
    }
})