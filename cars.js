class vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    information(){
        console.log(` Make: ${this.make}\n Model: ${this.model}\n Year: ${this.year}`);
    }
}

class car extends vehicle{
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors = doors;
    }

    info(){
        super.information();
        console.log(` Doors: ${this.doors}`);
    }
}

let carObject = new car("Ford", "Mondeo", "2002", "4");
carObject.info();