const textInput = document.querySelector('.input');
const encryptButton = document.querySelector('.encrypt');
const decryptButton = document.querySelector('.decrypt');
const image = document.querySelector('.image');
const textOutput = document.querySelector('.textOutput');
const copyButton = document.querySelector('.copyButton');
let text = '';
copyButton.style.display = 'none';

encryptButton.addEventListener('click',encrypt);


function encrypt(){
    text = textInput.value;
    arr = StringToArray(text);
    arr = arr.map(addWord);
    encryptText = arr.join(' ');
    console.log(arr);
    textOutput.textContent = encryptText;
    image.style.display = 'none';
    copyButton.style.display = 'initial';
}

function StringToArray(str){
    let arr = str.split(' ');
    return arr;
}

function addWord(word){
    let char = word.split('');
    let encryptChar = char.map(newChar);
    let encryptWord = encryptChar.join('');
    return encryptWord;
}

function newChar(char){
    if(char === 'a') return 'ai';
    else if(char === 'e') return 'enter';
    else if(char === 'i') return 'imes';
    else if(char === 'o') return 'ober';
    else if(char === 'u') return 'ufat';
    else return char;
}

    
