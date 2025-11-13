function submitButton() {
    let textInputElement = document.querySelector('.js-text-input');

    let result = textInputElement.value;

    //document.querySelector('.js-display-name').textContent = result;

    document.querySelector('.js-display-name').innerHTML  = `Your Name Is: ${result}`;

    console.log(result);

}


function keydownPressed(event) {
    if(event.key === 'Enter') {
        submitButton();
    }
}