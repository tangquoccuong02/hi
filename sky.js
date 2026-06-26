const Sky = (() => {
    const canvas = document.getElementById("skyCanvas");
    const ctx = canvas.getContext("2d");
    const sparkleCanvas = document.getElementById("sparkleCanvas");
    const sctx = sparkleCanvas.getContext("2d");

    let w,h,t=0;
    let clouds=[];
    let sparkles=[];

    function resize(){
        w = canvas.width;
        h = canvas.height;

        clouds = [];
        for(let i=0;i<10;i++){
            clouds.push({
                x: Math.random()*w,
                y: Math.random()*h*.25,
                r: w*(.08 + Math.random()*.13),
                speed: .03 + Math.random()*.06,
                alpha: .018 + Math.random()*.025
            });
        }

        sparkles = [];
        for(let i=0;i<28;i++){
            sparkles.push({
                x: w*(.56 + Math.random()*.33),
                y: h*(.18 + Math.random()*.36),
                size: .7 + Math.random()*1.5,
                phase: Math.random()*6.28
            });
        }
    }

    function drawCloud(c){
        const g = ctx.createRadialGradient(c.x,c.y,0,c.x,c.y,c.r);
        g.addColorStop(0,`rgba(255,255,255,${c.alpha})`);
        g.addColorStop(.55,`rgba(255,255,255,${c.alpha*.4})`);
        g.addColorStop(1,"rgba(255,255,255,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(c.x,c.y,c.r,0,Math.PI*2);
        ctx.fill();
    }

    function drawSky(){
        t += .01;
        ctx.clearRect(0,0,w,h);

        clouds.forEach(c=>{
            c.x += c.speed;
            if(c.x - c.r > w){
                c.x = -c.r;
                c.y = Math.random()*h*.25;
            }
            drawCloud(c);
        });

        sctx.clearRect(0,0,w,h);
        sparkles.forEach(sp=>{
            const a = .05 + Math.sin(t + sp.phase)*.055;
            sctx.beginPath();
            sctx.fillStyle = `rgba(255,235,255,${a})`;
            sctx.shadowColor = "rgba(255,140,210,.45)";
            sctx.shadowBlur = 8;
            sctx.arc(sp.x,sp.y,sp.size,0,Math.PI*2);
            sctx.fill();
        });
        sctx.shadowBlur = 0;

        requestAnimationFrame(drawSky);
    }

    return {
        start(){resize();drawSky();},
        resize
    };
})();
