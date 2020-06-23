const keys = document.querySelectorAll(".key");

window.addEventListener("load", registerEvents);

function registerEvents(){

    keys.forEach(function (key) {
        key.addEventListener("click", playNote);
        key.addEventListener("transitionend", removerPlayingClass);
    });
    
    window.addEventListener("keydown", playNote);
}


function playNote(event) {

    let audioKeyCode = getKeyCode(event);
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);
    const cantFoundAnyKey = (key == null);
   
    if (cantFoundAnyKey) {
        return;
    }

    addPlayingClass(key);
    playAudio(getAudio(audioKeyCode));
}

function getKeyCode(event) {
    const isKeyboard = event.type === "keydown";
    if (isKeyboard) {
        return event.keyCode;
    } else {
        return event.target.dataset.key;
    }
}

function getAudio(key){
    return document.querySelector(`audio[data-key="${key}"]`);
}

function playAudio(audio){
    audio.currentTime =0;
    audio.play();
}

function addPlayingClass(key){
    key.classList.add('playing');

}

function removerPlayingClass(event){
    event.target.classList.remove('playing');
}