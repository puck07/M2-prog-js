class App {
    runApplication() {
        console.log("hello world!")
       
        let array = ["artist1", "artist2", "artist3"];
    
        console.log(array);
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            console.log(i + ": "+ element);
        }

        array.push("bob dylan","prince")
        let indexToRemove = array.indexOf("bob dylan")
        array.splice(indexToRemove,1)
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            console.log(i + ": "+ element);
        }

        

        let nummers = [2, 5, 7];
        console.log(nummers);
        for (let i = 0; i < nummers.length; i++) {
            const element = nummers[i];
            

            var optellen = element + (1)
            console.log(optellen)
        }
       let headersByClass = document.getElementsByClassName("name")
       for (let i = 0; i < headersByClass.length; i++) {
        const element = headersByClass[i];
        console.log(element);
    }
    } 
}



let app = new App();
app.runApplication();


