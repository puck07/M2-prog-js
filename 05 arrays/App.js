class App {
    runApplication() {
        console.log("hello world!")

        let array1 = ["artist1", "artist2", "artist3"];
        console.log(array1);
        for (let i = 0; i < array1.length; i++) {
            const element = array1[i];
            console.log(i + ": " + element);
        }
        array1.push("bob dylan", "prince")
        for (let i = 0; i < array1.length; i++) {
            const element = array1[i];
            console.log(i + ": " + element);
        }

        let array = ["artist1", "artist2", "artist3"];
        array.push("bob dylan", "prince")
        let indexToRemove = array.indexOf("bob dylan")
        array.splice(indexToRemove, 2)
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            console.log(i + ": " + element);
        }

        array.push("fred", "ed")
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            console.log(i + ": " + element);
        }

        let nummers = [2, 5, 7];
        console.log(nummers);
        for (let i = 0; i < nummers.length; i++) {
            const element = nummers[i];
            var optellen = element + (1)
            console.log(optellen)
        }
        let headersByCssClass = document.getElementsByClassName("name")
        console.log(headersByCssClass);
        for (let i = 0; i < headersByCssClass.length; i++) {
            const element = headersByCssClass[i];
            console.log(element);
        }

        let mijnH1 = document.getElementById("headerId")
        console.log(mijnH1.innerText);
        for (let i = 0; i < headersByCssClass.length; i++) {
            const element = headersByCssClass[i]
            console.log[element.innerText]
        }

        mijnH1.innerText = "Nieuwe text";
        for (let i = 0; i < headersByCssClass.length; i++) {
            const element = headersByCssClass[i];
            console.log(element.innerText)
            element.innerText = "huh?"
        }

        headersByCssClass[0].innerText = "nieuws ";
        headersByCssClass[1].innerText = "reviews";
        headersByCssClass[2].innerText = "commentaar ";
        headersByCssClass[3].innerText = "brief";
        headersByCssClass[4].innerText = "kaart";

        let data = ["nieuws", "reviews", "commentaar", "beste forum posts", "pricewatch"];
        console.log(data);
        for (let i = 0; i < headersByCssClass.length; i++) {
            const element = headersByCssClass[i];
            element.innerText = i + ": " + data[i]
            console.log(element.innerText);
        }


    }
}

let app = new App();
app.runApplication();


