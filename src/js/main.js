//mettre dans obj
const drumKit = {
    run(){
        document.documentElement.classList.add('js-enabled');
        window.addEventListener('keydown', ()=>{
            this.action(event);
        });
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => key.addEventListener('transitionend', ()=>{
            this.rmv;
        }));

    },
    action(event){
        const audio = document.querySelector(`audio[data-key="${event.key}"]`);
        const key = document.querySelector(`.key[data-key="${event.key}"]`);

        if (!audio) return;


        audio.currentTime = 0; //remet l'audio a 0 dès quon click dessus
        audio.play();
        key.classList.add('playing');
        let currentKey = event.key;
        document.body.className = currentKey
    },
    rmv (event){
        if (event.propertyName !== 'transform') return;
        this.classList.remove('playing');
    }
};
drumKit.run();

/* cODE QUI Marche
//déclaration de la fonction qui sort le sons quand on clique sur la touche


function action(event){
    const audio = document.querySelector(`audio[data-key="${event.key}"]`);
    const key = document.querySelector(`.key[data-key="${event.key}"]`);

    if (!audio) return;


    audio.currentTime = 0; //remet l'audio a 0 dès quon click dessus
    audio.play();

    key.classList.add('playing');
    // let currentKey = event.key;
    // document.body.className = currentKey;
}
function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');
    //document.body.style.backgroundColor = "#fff";
    //document.body.style.transition = ".08s ease";
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', action);

*/