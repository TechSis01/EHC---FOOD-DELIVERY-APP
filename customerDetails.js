const form = document.querySelector('form');

function insertAfter(newNode, referenceNode) {
  this.insertBefore(newNode, referenceNode.nextElementSibling);
  
  return newNode;
}

class FieldValidator {
  constructor(field) {
    this._field = field;
    this._error = null;
    
    this._onInvalid = this._onInvalid.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onBlur = this._onBlur.bind(this);
    
    this.bindEventListeners();
  }
  
  bindEventListeners() {
    this._field.addEventListener('invalid', this._onInvalid);
    this._field.addEventListener('input', this._onInput);
    this._field.addEventListener('blur', this._onBlur);
  }
  
  
  showError() {
    let errorNode;
    
    if (this._error !== null) {
      return this.updateError();
    }
    
    this._error = document.createElement('div');
    this._error.className = 'help-block';
    this._error.innerHTML = this._field.validationMessage;
    
    this._field.setAttribute('aria-invalid', 'true');
    this._field.closest('.form-group').classList.add('has-error');
    
    insertAfter.call(this._field.parentNode, this._error, this._field);
  }
  
  
  updateError() {
    if (this._error === null) return;
    
    this._error.innerHTML = this._field.validationMessage;
  }
  
  
  hideError() {
    if (this._error !== null) {
      this._error.parentNode.removeChild(this._error);
      this._error = null;
    }

    this._field.removeAttribute('aria-invalid');
    this._field.closest('.form-group').classList.remove('has-error');
  }
  
  
  _onInvalid(event) {
    event.preventDefault();
  }
  
  
  _onInput(event) {
    if (this._field.validity.valid) {
      this.hideError();
    } else {
      this.updateError();
    }
  }
  
  
  _onBlur(event) {
    if ( ! this._field.validity.valid) {
      this.showError();
    }
  }
}

Array.prototype.slice.call(form.elements).forEach((element) => {
  element._validator = new FieldValidator(element);
});

form.setAttribute('novalidate', true);

form.addEventListener('invalid', (event) => {
  event.preventDefault();
  
  event.target._validator.showError();
}, true);


form.addEventListener('submit', (event) => {
  if ( ! form.checkValidity()) {
    event.preventDefault();
    
    form.querySelectorAll(':invalid')[0].focus();
    return;
  }
  
  console.log('submit');
  event.preventDefault();
});