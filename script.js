function playSound(e){
    // console.log(e.keyCode)
    // console.log(e)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    // console.log(audio);
    // console.log(key);
    if(!audio) return;
    audio.play();
    key.classList.add("playing")
    
}
function removeTransition(e){
    // console.log(e)
    if(e.propertyName !== 'transform') return;
    // console.log(e.propertyName)
    this.classList.remove('playing')
}
const keys = document.querySelectorAll('.key');
keys.forEach(key =>key.addEventListener('transitionend', removeTransition) );
window.addEventListener("keydown",playSound)