const textInput = document.querySelector('#textarea');
const shuffleBtn = document.querySelector('.btn');
const help = document.querySelector('.help');
const bottom = document.querySelector('.bottom');
const shuffleOutput = document.querySelector('.shuffle-output');

shuffleBtn.addEventListener('click' , ()=> {
    let text = shuffle(textInput.value);

    shuffleOutput.textContent = text;
    bottom.style.display = "block";
    help.style.display = "none";
})
