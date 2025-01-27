const display = document.getElementById('display');
const buttons = document.querySelectorAll('#keys button');
const toggleButton = document.getElementById('toggle');


let currentInput = '';


buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.id;


    if (value === 'ac') {
      currentInput = '';
    } else if (value === 'de') {
      currentInput = currentInput.slice(0, -1);
    } else if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = 'Error';
      }
    } else {
      currentInput += value;
    }


    display.value = currentInput;
  });
});


/* Cambiar el fondo */
toggleButton.addEventListener('click', () => {
  const body = document.body;
  const currentColor = body.style.backgroundColor;


  body.style.backgroundColor =
    currentColor === 'rgb(0, 0, 0)' ? '#1a1a1a' : '#000000';
});
