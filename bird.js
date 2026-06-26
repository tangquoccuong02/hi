const Birds = (() => {
    const layer = document.getElementById("birdLayer");

    function rand(min,max){
        return Math.random()*(max-min)+min;
    }

    function birdSvg(){
        return `
        <svg viewBox="0 0 80 44" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="birdBody" x1="0" x2="1">
                    <stop offset="0" stop-color="rgba(40,45,50,.72)"/>
                    <stop offset="1" stop-color="rgba(15,20,25,.78)"/>
                </linearGradient>
                <linearGradient id="birdWing" x1="0" x2="1">
                    <stop offset="0" stop-color="rgba(255,255,255,.82)"/>
                    <stop offset="1" stop-color="rgba(70,80,90,.68)"/>
                </linearGradient>
            </defs>

            <path class="wing-left" d="M38 22 C18 6, 8 4, 0 10 C13 18, 24 24, 39 24 Z" fill="url(#birdWing)"/>
            <path class="wing-right" d="M41 22 C61 6, 72 4, 80 10 C67 18, 56 24, 41 24 Z" fill="url(#birdWing)"/>
            <ellipse cx="40" cy="23" rx="10" ry="5.5" fill="url(#birdBody)"/>
            <path d="M48 22 L59 19 L50 26 Z" fill="rgba(30,35,40,.72)"/>
            <circle cx="53" cy="20.5" r="1" fill="rgba(0,0,0,.5)"/>
        </svg>`;
    }

    function createBird(){
        const b = document.createElement("div");
        b.className = "bird";
        b.innerHTML = birdSvg();

        const top = rand(7,25);
        const scale = rand(.42,.72);
        const fromLeft = Math.random() > .45;
        const start = fromLeft ? "-90px" : "calc(100% + 90px)";
        const end = fromLeft ? "calc(100% + 120px)" : "-120px";

        b.style.setProperty("--top", top + "vh");
        b.style.setProperty("--scale", scale);
        b.style.setProperty("--start", start);
        b.style.setProperty("--end", end);
        b.style.setProperty("--curve", rand(-38,38) + "px");
        b.style.animationDuration = rand(13,22) + "s";

        if(!fromLeft){
            b.querySelector("svg").style.transform = "scaleX(-1)";
        }

        layer.appendChild(b);
        setTimeout(()=>b.remove(),23000);
    }

    function start(){
        for(let i=0;i<4;i++){
            setTimeout(createBird, i*1900);
        }
        setInterval(createBird, 6800);
    }

    return {start};
})();
