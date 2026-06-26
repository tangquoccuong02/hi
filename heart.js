const Hearts = (() => {
    const layer = document.getElementById("heartLayer");

    function rand(min,max){
        return Math.random()*(max-min)+min;
    }

    function createHeart(){
        const h = document.createElement("div");
        h.className = "heart";
        h.innerHTML = Math.random() > .82 ? "♡" : "❤";

        h.style.left = rand(69.5,73.5) + "%";
        h.style.top = rand(32.5,36.5) + "%";
        h.style.fontSize = rand(17,34) + "px";
        h.style.setProperty("--x", rand(-78,74) + "px");
        h.style.setProperty("--y", rand(-255,-130) + "px");
        h.style.setProperty("--r", rand(-18,22) + "deg");
        h.style.animationDuration = rand(3.8,5.8) + "s";

        layer.appendChild(h);
        setTimeout(()=>h.remove(),6200);
    }

    function start(){
        setInterval(createHeart, 520);
        setTimeout(()=>setInterval(createHeart, 760), 260);
    }

    return {start};
})();
