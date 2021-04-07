const inputEl = document.getElementById("validation-input");

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
    console.log(this.value.length);
    
    if (this.getAttribute('data-length') > this.value.length) { 
    this.classList.add('invalid');
    } else {
    this.classList.remove('invalid');
    this.classList.add('valid');
    }
};