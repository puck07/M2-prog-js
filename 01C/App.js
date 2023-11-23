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

        let nummer = 5
        let naam = "puck"
        let slay =false

        console.log(nummer)
        console.log(naam)
        console.log(slay)

        this.leeftijd = 16
        this.naam = "puck"
        this.cool = true


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

console.log(app.leeftijd)
console.log(app.naam)
console.log(app.cool)


