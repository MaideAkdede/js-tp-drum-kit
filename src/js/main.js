(function (){const DrumKit = {
     run(){
     document.documentElement.classList.add('js-enabled');

     this.keys = document.querySelectorAll('.key');
     this.keys.forEach(key => key.addEventListener('transitionend', (event)=>{
         this.removeTransition(event);
     }));

     document.addEventListener('keydown', (event)=>{
       this.action(event);
     });


    },
    action(event){

        this.audio = document.querySelector(`audio[data-key="${event.key}"]`);
        this.key = document.querySelector(`.key[data-key="${event.key}"]`);

        if (!this.audio) return;


        this.audio.currentTime = 0; //remet l'audio a 0 dès quon click dessus
        this.audio.play();

        this.key.classList.add('playing');

        // document.body.className = currentKey;
        this.currentKey = event.key;
        console.log(this.currentKey);
        document.body.classList = this.currentKey;
    },
    removeTransition(event) {
         this.key.classList.remove('playing');
         document.body.classList = "";
    }
};
DrumKit.run();
})();

/* code avant la mise dans l'objet :

document.documentElement.classList.add('js-enabled');

function action(event){
    const audio = document.querySelector(`audio[data-key="${event.key}"]`);
    const key = document.querySelector(`.key[data-key="${event.key}"]`);

    if (!audio) return;

    audio.currentTime = 0; //remet l'audio a 0 dès quon click dessus
    audio.play();

    key.classList.add('playing');

    this.currentKey = event.key;
    console.log(this.currentKey);
    document.body.classList = this.currentKey;
}
function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');
    document.body.classList = "";
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

document.addEventListener('keydown', action);
*/
