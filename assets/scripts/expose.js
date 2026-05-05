// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const confetti = new JSConfetti()
   
    let volumeSlider = document.getElementById("volume")

    let audio = document.querySelector("audio");

    let soundButton = document.querySelector("button");
    
    let hornImg = document.querySelector("img");

    let dropDown = document.getElementById("horn-select");

    let soundIcon = document.querySelector("#volume-controls img");
        
    

    dropDown.addEventListener('change', function(){
        hornImg.src = "assets/images/" + dropDown.value + ".svg";
        hornImg.alt = dropDown.value + " image";
        audio.src = "assets/audio/" + dropDown.value + ".mp3";
        // console.log(hornImg.alt)
        // console.log(audio)
        // console.log(dropDown.value)
    });

    soundButton.addEventListener('click', function(){

        if (dropDown.value === "select"){
            return;
        } 
        audio.play();

        if (dropDown.value === "party-horn"){
            confetti.addConfetti();
        }
        
        
    });
    
    volumeSlider.addEventListener('input', function(){
        let volumeLevel = volumeSlider.value;
        // let soundIcon = document.querySelectorAll("img")[1];
        
        if (volumeLevel == 0){
            soundIcon.src = "assets/icons/volume-level-0.svg";
            soundIcon.alt = "Volume level 0";
        } else if (volumeLevel < 33){
            soundIcon.src = "assets/icons/volume-level-1.svg";
            soundIcon.alt = "Volume level 1";
        } else if (volumeLevel < 67){
            soundIcon.src = "assets/icons/volume-level-2.svg";
            soundIcon.alt = "Volume level 2";
        } else{
            soundIcon.src = "assets/icons/volume-level-3.svg";
            soundIcon.alt = "Volume level 3";
        }
        audio.volume = (Number(volumeLevel)/100);
    })
        

}


