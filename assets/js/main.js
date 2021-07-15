

window.onload = () => {

    window.addEventListener("resize", () => {
        document.getElementById("canva").width = document.body.clientWidth;
    })

    function reload() {
        window.location.reload();
    }
    
    document.getElementById("restart").addEventListener("click", () => {
        reload();
    })
    document.getElementById("start").addEventListener("click", () => {

        
        let c = document.getElementById("canva");
        let ctx = c.getContext("2d");
        let x = 500;
        let y = 940;
        let xprime = 200;
        let yprime = 50;
        let bullets = [];
        const button = document.getElementById('start');
        document.getElementById("start").style.display = "none";
        score = 0;

        button.disabled = true;

        function draw() {
            ctx.clearRect(0, 0, c.width, c.height)
            drawCanon2();
            Ennemy2();
            for (let i = 0; i < bullets.length; i++) {
                let bullet = bullets[i];
                bullet.y -= 25;
                fire(bullet.x, bullet.y);
                if (bullet.y >= 0) {
                    fire(bullet.x, bullet.y)

                }
            }
            requestAnimationFrame(draw);
        }

        function drawCanon2() {
            ctx.beginPath();
            ctx.lineTo(x + 25, y - 200);
            ctx.arc(x, y, 50, 0, Math.PI);
            ctx.rect(x - 25, y - 200, 50, 1);
            ctx.lineTo(x - 50, y);
            ctx.rect(x + 50, y - 40, 40, 90);
            ctx.rect(x - 90, y - 40, 40, 90);
            ctx.fillStyle = "white";
            ctx.strokeStyle = "white";
            ctx.stroke();
        }

        function fire(x, y) {
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(x, y, 10, 0, 2 * Math.PI)
            ctx.fill();

            if (y <= yprime && xprime - 40 <= x && xprime + 40 >= x) {

                bullets = bullets.filter(values => {
                    values.y !== y
                })
                xprime = Math.floor(Math.random() * ((c.width - 100) - 100) + 100);
                console.log("colision")
                score++;
                document.getElementById("score").innerHTML = "scrore : " + score;
                if (score === 10) {
                    document.getElementById("win").innerHTML = "Bravo !";
                    document.getElementById("restart").style.display = "block";
                    
                }
            }
        }

        function Ennemy2() {
            ctx.beginPath();
            ctx.arc(xprime, yprime, 10, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(xprime, yprime, 20, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(xprime, yprime, 30, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(xprime, yprime, 40, 0, 2 * Math.PI);
            ctx.fillStyle = "white";
            ctx.strokeStyle = "red";
            ctx.stroke();

        }
        xprime = Math.floor(Math.random() * ((c.width - 100) - 100) + 100);
        draw();


        document.onkeydown = function (e) {
            if (score < 10) {
                switch (e.keyCode) {
                    case 37:
                        if (x - 10 - 90 > 0) {
                            x = x - 10
                        }
                        break;
                    case 39:
                        if (x + 10 + 90 < c.width) {
                            x = x + 10;
                        }
                        break;
                    case 32:
                        bullets.push({ x: x, y: y - 200 })

                        break;
                }
            }
        }

    })

}

