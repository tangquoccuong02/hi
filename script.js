let startedMain = false;

function resizeAll(){
    const box = document.querySelector(".photo-box");
    if(!box) return;

    const rect = box.getBoundingClientRect();

    window.APP = {
        w: Math.floor(rect.width),
        h: Math.floor(rect.height)
    };

    document.querySelectorAll("canvas").forEach(c=>{
        c.width = window.APP.w;
        c.height = window.APP.h;
    });
}

function openEnvelope(){
    const envelopeBox = document.getElementById("envelopeBox");
    const welcome = document.getElementById("welcomeScreen");
    const main = document.getElementById("mainScreen");
    const music = document.getElementById("music");

    envelopeBox.classList.add("opening");

    for(let i=0;i<9;i++){
        const h = document.createElement("div");
        h.className = "mini-heart";
        h.innerHTML = "♡";
        h.style.setProperty("--x", (-70 + Math.random()*140) + "px");
        h.style.fontSize = (16 + Math.random()*18) + "px";
        h.style.animationDelay = (i*.08) + "s";
        envelopeBox.appendChild(h);
        setTimeout(()=>h.remove(),1900);
    }

    setTimeout(()=>{
        welcome.classList.add("hidden");
        main.classList.remove("hidden");

        if(music){
            music.volume = .65;
            music.play().catch(()=>{});
        }

        if(!startedMain){
            startedMain = true;
            resizeAll();
            Sky.start();
            Hearts.start();
            Birds.start();

            window.addEventListener("resize",()=>{
                resizeAll();
                Sky.resize();
            });
        }
    },1350);
}

window.addEventListener("load",()=>{
    const envelopeBox = document.getElementById("envelopeBox");
    envelopeBox.addEventListener("click",openEnvelope);
});
