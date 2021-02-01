function getPin() {
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0];
    if (pin.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

//display generated pin:
function generatePin() {
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
}
// handle calculator event:
const buttonContainer = document.getElementById('digits-container');
buttonContainer.addEventListener('click', function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        if (digit === 'C') {
            const typedInput = document.getElementById('typedPin');
            typedInput.value = ''
        }
        if (digit === 'Del') {
            const typedInput = document.getElementById('typedPin');
            const slice = typedInput.value.slice(0, -1)
            document.getElementById('typedPin').value = slice;
        }
    }
    else {
        const typedInput = document.getElementById('typedPin');
        typedInput.value = typedInput.value + digit;
    }
})
//verify Pin:
function verifyPin() {
    const pin = document.getElementById('pin').value;
    const typedPin = document.getElementById('typedPin').value;
    if (pin === typedPin) {
        displayMatch('block', 'none');
        document.getElementById('typedPin').value = '';
    }
    else {
        displayMatch('none', 'block');
        document.getElementById('typedPin').value = '';
        attempt();
    }
    
}
function displayMatch(correctStatus, incorrectStatus) {
    const correct = document.getElementById('correctPin');
    correct.style.display = correctStatus;
    const inCorrect = document.getElementById('incorrectPin');
    inCorrect.style.display = incorrectStatus;
}
function attempt() {
    var tried = document.getElementById('try').innerText;
    tried = Number(tried);
    tried = tried - 1;
    document.getElementById('try').innerText = tried;
    if (tried == 0){
        const submitButton = document.getElementById('submitButton');
        submitButton.style.display = 'none';
        window.alert('Wrong attempt!! please reload page and try again');
    }
}