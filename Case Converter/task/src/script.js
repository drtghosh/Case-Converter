let textEntry = document.getElementById("text-entry" );
let upperCaseButton = document.getElementById("upper-case" );
let lowerCaseButton = document.getElementById("lower-case" );
let properCaseButton = document.getElementById("proper-case" );
let sentenceCaseButton = document.getElementById("sentence-case" );
let saveFileButton = document.getElementById("save-text-file" );

upperCaseButton.addEventListener("click", function () {
    textEntry.value = textEntry.value.toUpperCase();
});

lowerCaseButton.addEventListener("click", function () {
    textEntry.value = textEntry.value.toLowerCase();
});

properCaseButton.addEventListener("click", function () {
    let lowerCaseText = textEntry.value.toLowerCase();
    let splitText = lowerCaseText.split(" ");
    for (let i=0; i<splitText.length; i++) {
        splitText[i] = splitText[i].charAt(0).toUpperCase() + splitText[i].slice(1);
    }
    textEntry.value = splitText.join(" ");
});

sentenceCaseButton.addEventListener("click", function () {
    let lowerCaseText = textEntry.value.toLowerCase();
    let splitSentence = lowerCaseText.split(". ");
    for (let i=0; i<splitSentence.length; i++) {
        splitSentence[i] = splitSentence[i].charAt(0).toUpperCase() + splitSentence[i].slice(1);
    }
    textEntry.value = splitSentence.join(". ");
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

saveFileButton.addEventListener("click", function () {
    let textToSave = textEntry.value;
    download("text.txt", textToSave);
});