

window.onload = () => {
    let c = document.getElementById("canva");
    let ctx = c.getContext("2d");

    function drawCanon() {
        ctx.beginPath();
        ctx.lineTo(620, 600);
        ctx.arc(600, 800, 50, 0, Math.PI);
        ctx.rect(575, 600, 45, 1);
        ctx.lineTo(550, 800);
        ctx.rect(650, 760, 40, 90);
        ctx.rect(510, 760, 40, 90);
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.stroke();

    }
    drawCanon();


    function entierAleatoire(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function Ennemy() {
        
        ctx.beginPath();
        ctx.arc(100, 75, 10, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(100, 75, 20, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(100, 75, 30, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(100, 75, 40, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.stroke();

    }
    Ennemy();
}