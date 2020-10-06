class BMI{
    constructor(height, weight){
        // Initialise variables
        this.height = height;
        this.weight = weight;
    }

    // Calculations method
    calculateBMI(){
        let bmi = this.weight/(this.height**2);
        return bmi;
    }
}

// Create instance of class and call it
let MyBmi = new BMI(2, 90);
let calculatedBMI = MyBmi.calculateBMI();
console.log(calculatedBMI);