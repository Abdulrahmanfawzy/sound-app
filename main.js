let content = document.querySelectorAll(".content li");
let div2 = document.querySelector(".div2 img");
let audio = document.querySelector(".audio");
let play = document.querySelector(".fa-solid");

content.forEach((el)=>{
    el.addEventListener("click" , (e)=>{
        div2.src = e.target.dataset.img;
        audio.src = e.target.dataset.sound;
        play.className = "fa-solid fa-pause";
    })
})



play.onclick = ()=>{

    if(audio.src){ // if anyone click on icon first , before click on any track sound.
        if(play.className == "fa-solid fa-play"){
            play.className = "fa-solid fa-pause";
            audio.play();
        }else{
            play.className = "fa-solid fa-play";
            audio.pause();
        }
    }else{
        alert("you have to click on any sound track!");
    }
    
}
