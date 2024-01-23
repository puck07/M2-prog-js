class App
{
    runApplication()
    {
        console.log("hello world!");

        let user1 = new User ("puck")
        let user2 = new User ("user54")
        let user3 = new User ("user52")
        let user4 = new User ("hans")
        let user5 = new User ("jan")
        let user6 = new User ("sam")

        user1.wieBenIk(); //puck
        user2.wieBenIk(); //user54
        user3.wieBenIk(); //user52
        user4.wieBenIk(); //hans
        user5.wieBenIk(); //jan
        user6.wieBenIk(); //sam
    }
}

class User{
    constructor(name){
        this.name = name;
    }
    wieBenIk(){
        console.log(this.name);
    }
}

let app = new App();
app.runApplication();

