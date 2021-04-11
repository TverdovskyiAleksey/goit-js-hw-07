// const inputEl = document.querySelector("#validation-input");

// inputEl.addEventListener('blur', onInputBlur);

// // function onInputBlur() {
// //     console.log(this.value.length);
    
// //     if (this.getAttribute('data-length') > this.value.length) { 
// //     this.classList.add('invalid');
// //     } else {
// //     this.classList.remove('invalid');
// //     this.classList.add('valid');
// //     }
// // };

const inputEl = document.querySelector('#validation-input');

const validationInput = function () {
    console.log(this.value.length);
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList = 'valid';
  } else {
    inputEl.classList = 'invalid';
  }
};

inputEl.addEventListener('blur', validationInput);
