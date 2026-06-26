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
        h.style.fontSize = rand(15,29) + "px";
        h.style.setProperty("--x", rand(-65,65) + "px");
        h.style.setProperty("--y", rand(-220,-110) + "px");
        h.style.setProperty("--r", rand(-16,20) + "deg");
        h.style.animationDuration = rand(4.2,6.2) + "s";

        layer.appendChild(h);
        setTimeout(()=>h.remove(),6500);
    }

    function start(){
        setInterval(createHeart, 820);
        setTimeout(()=>setInterval(createHeart, 1100), 350);
    }

    return {start};
})();
