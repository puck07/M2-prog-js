class App
{
    runApplication()
    {
        this.greeting = "starting up"
        console.log("hello world!")
        
        this.eenVariableNaam = "hello"
        this.appNaam = "subway surfers"
        this.versienummer = 0.2
        this.versiedatum = 21-11-2023
        this.autheur = "puck"
        this.copyright = "puck"
        this.distributeur = "puck"
        this.darkmode = false


    }
}

let app = new App();
app.runApplication();

console.log(app.greeting);
console.log(app.darkmode)
console.log("appNaam:" + app.appNaam);
console.log("versienummer:" + app.versienummer);
console.log("autheur:" + app.autheur);
console.log("copyright:" + app.copyright);
console.log("distributeur:" + app.distributeur);
console.log("darkmode:" + app.darkmode);


