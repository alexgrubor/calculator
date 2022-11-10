
class Calculator{
    constructor(){
        this.pi= 3.141592653589793;
        this.e= 2.718281828459045
    }
     //getter
     get pi(){
        return this._pi
    }

    get e(){
        return this._e
    }
    //methods
    
    add (num1,num2){ 
        return num1 + num2
    }
    subtract(num1,num2) {
        return num1 - num2
    }
    multiply(num1,num2) {
        return num1 * num2
    }
    divide(num1,num2){
        if (num2 ===0){
            return `ERROR, please avoid using 0 in this operation`
        }
        return num1 / num2
    }
    elevate(num1,num2){
       return num1 **num2
    }
    remainder(num1,num2) {
        if (num2 ===0){
            return `Error: Divisor can't be 0`
        }
        return num1 % num2
    }
    squareRoot(num1) {
        return Math.sqrt(num1)
    }
    ratio(x,y,width){
        let height = (width / x) *y
        return height
    }
    percentage(num1,num2) {
        let percentage = (num1/num2)*100
        return percentage
    }
}

let calculator = new Calculator()

//Testing methods 
console.log(calculator.add(-1, 3)) 
console.log(calculator.subtract(1, 3))
console.log(calculator.multiply(2, 3))
console.log(calculator.divide(2, 3))
console.log(calculator.elevate(2, 3))
console.log(calculator.remainder(4, 0))
console.log(calculator.squareRoot(4))
console.log(calculator.ratio(4, 2, 200))
