let emojiString = '';
let listenToInput = false;
const validInputRegex = /^[a-zA-Z0-9_ \-]*$/;

document.addEventListener('input', (event) => {
    let newEmojiString = emojiString;

    if (event.inputType == 'insertText') {
        if (event.data == ':' && !listenToInput) {
            listenToInput = true;
        }

        if (listenToInput && event.data.match(validInputRegex)) {
            newEmojiString += event.data;
        } else if (event.data != ':') {
            listenToInput = false;
            newEmojiString = '';
        }
    } else if (event.inputType == 'insertParagraph') {
        // enter/newline can be used to signal emoji selection
        console.log('newline entered');

        newEmojiString = '';
        listenToInput = false;
    } else {
        newEmojiString = '';
        listenToInput = false;
    }

    emojiString = newEmojiString;

    if (emojiString.length >= 4) {
        console.log(newEmojiString);
    }
});