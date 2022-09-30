class BMI{
    // constructor used to initialise data
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }

    calculateBMI(){
        let bmi = this.weight/(this.height**2);
        return bmi;
    }
}

let bmiVariable = new BMI(2,100);
console.log(bmiVariable.calculateBMI());