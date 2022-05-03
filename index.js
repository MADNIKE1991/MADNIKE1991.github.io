let mainPlayer = document.querySelector('.main_player'),
    currentSound = 2, // текущий проигрываемый трек
    counterSounds = 4; // к-во треков для проигрывания


mainPlayer.addEventListener("ended", ()=>{
    if(currentSound > counterSounds){
        currentSound = 1;
    }
    mainPlayer.src = `./sounds/${currentSound}.mp3`;
    mainPlayer.play();
    currentSound++;
});