### Calculator.js 
- A library which contains useful calculation functions based on common formulas (aspect ratio, percentage calculation, etc…)



#### Create a Calculator Class with

## Properties

### pi

A property `pi` with the value of `3.141592653589793`


```js
calculate.pi // 3.141592653589793
```

### e

A property `e` containing the Euler's number: `2.718281828459045` 

```js
calculate.e // 2.718281828459045
``` 


## Methods

### add()

A method that calculates the sum of 2 numbers:

```js
calculate.add(2, 3) // 5
calculate.add(6, 7) // 13
calculate.add(-1, 7) // 6
```
### subtract() 

A method that calculates the difference between 2 numbers

```js
calculate.subtract(5, 3); // 2
calculate.subtract(5, -10); // -5
calculate.subtract(7, 2); // 5
```

### multiply() 

A method that calculates the product of 2 numbers

```js
calculate.multiply(5, 3); // 15
calculate.multiply(5, -10); // -50
calculate.multiply(7, 2); // 14
```

### divide()

A method that calculates the quotient of a number divided by another

WARNING: If the divisor (the second number) is 0, return an error message.

### elevate()

A method that calculates the result of elevating a number to the power of another.

```js
calculate.elevate(2, 3) // 8
calculate.elevate(4, 2) // 16
calculate.elevate(3, 3) // 27
```

### remainder()

A method that calculates the remainder of a division between 2 numbers.

WARNING: If the divisor is set to 0, an error will be thrown.

```js
calculate.remainder(4, 2) // 0
calculate.remainder(7, 2) // 1
calculate.remainder(7, 0) // "Error: Divisor can't be 0"
```

### squareRoot()

A method that calculate the square root of a number

```js
calculate.squareRoot(4) // 2
calculate.squareRoot(9) // 3
calculate.squareRoot(16) // 4
```

### ratio()

Given 3 values, `x`, `y` and `width`, calculate a fourth value `height` which should have the same ratio between `x` and `y`

The formula to calculate the height: divide the `width` by `x` and multiply the result by `y`

```js
calculate.ratio(4, 2, 200); // 100
calculate.ratio(16, 9, 100); // 56.25
calculate.ratio(3, 4, 12); // 16
```

### percentage()

A method that calculates the percentage of x in relation to y

The formula to calculate the percentage: divide the first number by the second and multiply by 100

```js
calculate.percentage(20, 100) // 20
calculate.percentage(20, 80) // 25
calculate.percentage(10, 50) // 20
```
