
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    // console.log(audio); // SHOULD NOT be null
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
        
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    }
    function removeTransition(e) {
        if(e.propertyName !== 'transform') return;
        this.classList.remove('playing')
    }

    const keys = document.querySelectorAll('.key')
    keys.forEach(key => key.addEventListener('transitionend',removeTransition));

    window.addEventListener('keydown', playSound);

