class Vehicle{
    constructor(make, model, year){
        // Initialise variables
        this.make = make;
        this.model= model
        this.year = year;
    }

    // Print method
    Information(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`)
    }
}

class Cars extends Vehicle{
    constructor(make, model, year, doors){
        // Initialise variables from Vehicles class
        super(make, model, year);
        this.doors = doors;
    }

    // Print method from Vehicle class plus local print
    Information(){
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}

// Create instance of class and call it
let myCar = new Cars('VW', 'Golf', 2011, 5);
myCar.Information();