let btnSubmit = document.getElementById('btnSubmit');

let fName = document.getElementById('fName');
let fNameMess = document.getElementById('fNameMess');
let lName = document.getElementById('lName');
let lNameMess = document.getElementById('lNameMess');
let uEmail = document.getElementById('uEmail');
let uEmailMess = document.getElementById('uEmailMess');

let queryType1 = document.querySelector('#queryType1');
let queryType2 = document.querySelector('#queryType2');
let queryTypeMess = document.getElementById('queryTypeMess');

let fMessage = document.getElementById('fMessage');
let fMessSpan = document.getElementById('fMessSpan');

let termCheck = document.querySelector('input[name=termCheck]');
let termCheckMess = document.querySelector('#termCheckMess');

let messageBox = document.querySelector('#messageBox');

const checkValidation = () => {
    if(!fName.checkValidity()) {
        fName.classList.add('border-red');
        fNameMess.classList.remove('d-none');
    } else {
        fName.classList.remove('border-red');
        fNameMess.classList.add('d-none');
    }

    if(!lName.checkValidity()) {
        lName.classList.add('border-red');
        lNameMess.classList.remove('d-none');
    } else {
        lName.classList.remove('border-red');
        lNameMess.classList.add('d-none');
    }

    if(uEmail.validity.typeMismatch) {
        uEmail.classList.add('border-red');
        uEmailMess.classList.remove('d-none');
        uEmailMess.innerHTML = 'Please enter a valid email address';
    } else if(!uEmail.validity.valid) {
        uEmail.classList.add('border-red');
        uEmailMess.classList.remove('d-none');
        uEmailMess.innerHTML = 'This field is required';
    } else {
        uEmail.classList.remove('border-red');
        uEmailMess.classList.add('d-none');
    }

    if(queryType1.checked != true && queryType2.checked != true) {
        queryTypeMess.classList.remove('d-none');
    } else {
        queryTypeMess.classList.add('d-none');
    }

    if(!fMessage.checkValidity()) {
        fMessage.classList.add('border-red');
        fMessSpan.classList.remove('d-none');
    } else {
        fMessage.classList.remove('border-red');
        fMessSpan.classList.add('d-none');
    }

    if(termCheck.checked != true) {
        termCheckMess.classList.remove('d-none');
    } else {
        termCheckMess.classList.add('d-none');
    }

};

const messageShow = () => {
    if(fName.checkValidity() && lName.checkValidity() && uEmail.checkValidity() && (queryType1.checked == true || queryType2.checked == true) && fMessage.checkValidity() && termCheck.checked == true) {
        messageBox.classList.remove('d-none');
        fName.value = '';
        lName.value = '';
        uEmail.value = '';
        queryType1.checked = false;
        queryType2.checked = false;
        fMessage.value = '';
        termCheck.checked = false;
        fName.focus();
        setTimeout( () => {
            messageBox.classList.add('d-none');
        }, 1500);
    } else {
        console.log("NO");
    }
}


btnSubmit.addEventListener('click', checkValidation);
btnSubmit.addEventListener('click', messageShow);

document.body.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        event.preventDefault();
        checkValidation();
        messageShow();
    }

    if (event.key == "Escape") {
        event.preventDefault();
        fName.value = '';
        lName.value = '';
        uEmail.value = '';
        queryType1.checked = false;
        queryType2.checked = false;
        fMessage.value = '';
        termCheck.checked = false;
        fName.focus();
    }
});