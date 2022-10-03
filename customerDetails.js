const form = document.getElementById('form');
const username = document.getElementById('username');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const address = document.getElementById('address');
const town = document.getElementById('town');
const number = document.getElementById('number');


form.addEventListener('submit', e => {
    //e.preventDefault();
	checkInputs();
});


 function validateForm() {
  let x = document.forms["myForm"]["username"].value;
  if (x == "") {
    alert("Blank spaces must be filled out");
    return false;
  }
}


function checkInputs() {

	const usernameValue = username.value.trim();
	const lnameValue = lname.value.trim();
	const emailValue = email.value.trim();
	const addressValue = address.value.trim();
	const townValue = town.value.trim();
	const numberValue = number.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Fill in blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

	if (addressValue === '') {
		setErrorFor(address, 'Address cannot be blank');
	} else {
		setSuccessFor(address);
	}
	
	if (townValue === '') {
		setErrorFor(town, 'Town cannot be blank');
	} else {
		setSuccessFor(town);
	}

	  if (numberValue === '') {
		setErrorFor (number, 'number cannot be blank');
	  }
	  else {
		setSuccessFor(number);
	}
	if (lnameValue === '') {
		setErrorFor (lname, 'Please fill in blank');
	} else {
		setSuccessFor(lname);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}








