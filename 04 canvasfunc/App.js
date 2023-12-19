class App
{
    runApplication()
    {
        console.log("hello world!");
        let canvas=document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        this.tekenhuis(g,100,10)
        this.tekenhuis(g,100,400)
        this.tekenhuis(g,500,600)
        this.tekenKerstBoom(g,100,300)
        let random = Math.random();
        console.log(random);
        if(random < 0.2)
        {
            title.style.backgroundColor = "#FFFF00"
        }

     
    }  
    tekenhuis(g,x,y)
    {
        
        g.beginPath();
        g.fillStyle = "lightgray";
        g.moveTo(600+x,400+y);
        g.lineTo(800+x,300+y);
        g.lineTo(700+x,200+y);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = 'red'
        g.moveTo(300+x,100+y);
        g.lineTo(200+x,300+y);
        g.lineTo(600+x,400+y);  
        g.lineTo(700+x,200+y)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "lightgray"
        
        g.moveTo(600+x,400+y);
        g.lineTo(600+x,600+y);
        g.lineTo(200+x,500+y);
        g.lineTo(200+x,300+y);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "lightgray"
        g.moveTo(600+x,400+y);
        g.lineTo(800+x,300+y);
        g.lineTo(800+x,500+y);
        g.lineTo(600+x,600+y);
        g.closePath();
        g.stroke();
        g.fill()




    }

    tekenKerstBoom(g, x, y){



        g.fillStyle = "green";
        g.beginPath()
        g.moveTo(x+40,10+y)
        g.lineTo(x+20,80+y)
        g.lineTo(x+60,80+y)
        g.closePath()
        g.stroke()
        g.fill()



        g.fillStyle = "yellow";
        g.beginPath();
        g.arc(90,60,10,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath()


        g.beginPath()
        g.moveTo(x+30,80+y)
        g.lineTo(x+30,100+y)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.moveTo(x+50,100+y)
        g.lineTo(x+30,100+y)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.moveTo(x+50,100+y)
        g.lineTo(x+50,80+y)
        g.closePath()
        g.stroke();



    }
        
    }
    


let app = new App();
app.runApplication();


