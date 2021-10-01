let textArea = document.querySelector('textarea');
let buttonToUpper = document.querySelector('#upper-case');
let buttonToLower = document.querySelector('#lower-case');
let buttonToProper = document.querySelector('#proper-case');
let buttonToSentence = document.querySelector('#sentence-case');
let buttonToSave = document.querySelector('#save-text-file');

function toUpper() {
    let textUp = textArea.value.toUpperCase();
    textArea.value = textUp;
}

function toLower() {
    let textLow = textArea.value.toLowerCase();
    textArea.value = textLow;
}

function toProper() {
    let arr = textArea.value.toLowerCase().split(' ');
    let newArr = arr.map(item => {
        return item[0].toUpperCase() + item.slice(1);
    })
    textArea.value = newArr.join(' ');

}

function toSentence() {
    let arr = textArea.value.toLowerCase().split('. ');
    let newArr = arr.map(item => {
        return item[0].toUpperCase() + item.slice(1);
    })
    textArea.value = newArr.join('. ');

}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}



buttonToUpper.addEventListener('click', toUpper);
buttonToLower.addEventListener('click', toLower);
buttonToProper.addEventListener('click', toProper);
buttonToSentence.addEventListener('click', toSentence);
buttonToSave.addEventListener('click', function(){download("text.txt",textArea.value)})
