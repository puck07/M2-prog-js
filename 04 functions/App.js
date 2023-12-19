
function heeftEenResultaat()
{
    let resultaat =1;
    return resultaat;
}
let hetResultaat = heeftEenResultaat();
console.log(hetResultaat);
console.log(heeftEenResultaat());

let x =9;
let a =3;
let b =4;
let c =89;

let y = (a*(x*x) )+ (b*x) +c;
console.log(y);

function ax2bcWiskunde(x,a,b,c)
{
    let y = (a*(x*x) )+ (b*x) +c;
    return y;
}

let y1 = ax2bcWiskunde(9,3,4,89);
console.log(y1);

let y2 = ax2bcWiskunde(3,6,5,45);
console.log(y2);

let y3 = ax2bcWiskunde(7,1,2,13);
console.log(y3);



function Wiskunde(u,h,l)
{
    let logY = Math.log(l) + h + Math.pow(u,2);
    console.log(logY);
}
let y4 = Wiskunde(9,8,15);

function argumentsAreHandy(shoutout)
{
    console.log("do you want to give a shoutout?");
    console.log(shoutout);
}
argumentsAreHandy("super shout out");
argumentsAreHandy("duper shout out");
argumentsAreHandy("super shout ");

function superMooiGlobalFunction()
{
    console.log("ik ben global");
    console.log("dus je mag mij overal aanroepen");
}
superMooiGlobalFunction();

class App
{
    runApplication()
    {
        console.log("hello world!")
       
    }

    newClassFunction()
    {
        console.log("hello world in de nieuwClassfunction");
    }
    anotherFunctionwithArgumants(aArgument)
    {
        console.log("kom maar met je argument");
        console.log("hier:");
        console.log(aArgument);
    }
    
    mario()
    {
        console.log("MARIO!!");
    }
   
    lachen()
    {
        let antwoord = "BWAHAHA!!!"
        return antwoord;
       
    }
    
  

    optelt(a,b){
        let f = parseInt(a) + parseInt(b)
        return f;
    }

    hamster()
    {
        let antwoord = "pip"
        return antwoord;
    }

  
   }

let app = new App();
app.runApplication();
app.newClassFunction();
app.anotherFunctionwithArgumants("mijn argument is iets...");
app.mario();
let resultaat = app.lachen();
console.log(resultaat);
let f = app.optelt(3,6)
console.log(f);
let pip = app.hamster();
console.log(pip);

