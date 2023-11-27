const textInput = document.querySelector('.input');
const encryptButton = document.querySelector('.encrypt');
const decryptButton = document.querySelector('.decrypt');
const image = document.querySelector('.image');
const textOutput = document.querySelector('.textOutput');
const copyButton = document.querySelector('.copyButton');
let text = '';
copyButton.style.display = 'none';

const copy = async() =>{
    text = textOutput.textContent;
    try{
        await navigator.clipboard.writeText(text);
        console.log('Contenido copiado al portapapeles');
    }catch(err){
        console.log('error al copiar: ', err);
    }
}

encryptButton.addEventListener('click',encrypt);
decryptButton.addEventListener('click',decrypt);
copyButton.addEventListener('click',copy);

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

function decrypt(){
    text = textInput.value;
    decryptText = text;
    decryptText = decryptText.replace(/ai/img,'a');
    decryptText = decryptText.replace(/enter/img,'e');
    decryptText = decryptText.replace(/imes/img,'i');
    decryptText = decryptText.replace(/ober/img,'o');
    decryptText = decryptText.replace(/ufat/img,'u');
    textOutput.textContent = decryptText;
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
    if(     char === 'a') return 'ai';
    else if(char === 'e') return 'enter';
    else if(char === 'i') return 'imes';
    else if(char === 'o') return 'ober';
    else if(char === 'u') return 'ufat';
    else return char;
}





    
