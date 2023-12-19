class App
{
    runApplication()
    {
        console.log("hello world!");
        let canvas=document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        
        g.beginPath();
        g.fillStyle = "lightgray";
        g.moveTo(600,400);
        g.lineTo(800,300);
        g.lineTo(700,200);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = 'red'
        g.moveTo(300,100);
        g.lineTo(200,300);
        g.lineTo(600,400);
        g.lineTo(700,200)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "lightgray"
        
        g.moveTo(600,400);
        g.lineTo(600,600);
        g.lineTo(200,500);
        g.lineTo(200,300);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "lightgray"
        g.moveTo(600,400);
        g.lineTo(800,300);
        g.lineTo(800,500);
        g.lineTo(600,600);
        g.closePath();
        g.stroke();
        g.fill()

        let random = Math.random();
        console.log(random);
        if(random < 0.2)
        {
            title.style.backgroundColor = "#FFFF00"
        }

     
    }  
        
    }


let app = new App();
app.runApplication(g);

