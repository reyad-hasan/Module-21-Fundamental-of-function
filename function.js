// function brushTeeth(){
//     console.log('hero add')
// }
// brushTeeth()

// function square(number){
//     const total = number * number;
//     return total;
// }

// const result = square(500);
// console.log(result);

// function sum(a, b, c, d) {
//     const total = a + b + c + d;
//     return total;
// }
// const result = sum(2, 2, 2, 28);
// console.log(result);

// function difference(num1, num2) {
//     const diff = num1 - num2;
//     return diff;
// }
// const fatherAge = 55;
// const myAge = 28;
// const result = difference(fatherAge, myAge);
// console.log(result);

// function tenTime(number) {
//     const result = number * 10;
//     return result;
// }
// const output = tenTime(99);
// console.log('Output:', output);

// function add(price1, price2) {
//     const total = price1 + price2;
//     return total;
// }
// const bill = add(5, 80);

// function add2(price1, price2) {
//     return price1 + price2;
// }
// const bill2 = add2(5, 80);

// console.log(bill, bill2);


// multiline function
// function doMath(num1, num2) {
//     const sum = num1 + num2;
//     const diff = num1 - num2;
//     const multiply = sum * diff;
//     const result = multiply / 2;
//     return result;
// }

// const result = doMath(20, 10);
// console.log(result);


// conditional return
// function isEven(number) {
//     if (number % 2 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(isEven(5));
// console.log(isEven(110));


// shortcut return
// function isOdd(number) {
//     if (number % 2 === 1) {
//         return true;
//     }
//     return false;
// }
// console.log(isOdd(5));
// console.log(isOdd(110));


// function length
// function evenSizedString(str) {
//     console.log(str);
//     const size = str.length;
//     if(size % 2 === 0){
//         console.log('is even Number');
//     }
//     else{
//         console.log('is odd Number');
//     }
// }
// evenSizedString('Dhaka');
// evenSizedString('Faka');


// boolean function
// function doubleOrTriple(number, doDouble) {
//     if (doDouble === true) {
//         const result = number * 2;
//         return result;
//     }
//     else {
//         const result = number * 3;
//         return result;
//     }
// }
// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));

// const double= doubleOrTriple(5, true);
// const double3= doubleOrTriple(5, false);
// console.log(double, 'it is double');
// console.log(double3, 'is is double3');


// array length function
// function numberOfElements(number) {
//     const len = number.length;
//     return len;
// }
// const numbers = [1, 3, 4, 55, 77, 66];
// const result = numberOfElements(numbers);
// console.log(result)


// get age function
// function getAge(person) {
//     const age = person.age;
//     return age;
// }

// const personDetails = {
//     name: 'kamrul',
//     age: 239,
// }
// console.log(getAge(personDetails));
// const output = getAge(personDetails);
// console.log(output, 'Person Age');


// undefined function
// function sumOfNumber() {
//     return
// }
// const sum = sumOfNumber();
// console.log('Sum of Number is', sum);


// sum of Array using function
// function sumOfArray(numbers) {
//     let sum = 0;
//     for (const number of numbers) {
//         sum = sum + number;
//     }
//     return sum;
// }

// const numbers = [1, 4, 5, 6, 8];
// const result = sumOfArray(numbers);
// console.log('Sum of Array', result);


// find odd number an Array using function
// function arrayOfEven(numbers){
//     const evens = [];
//     for(const number of numbers){
//         if(number %2===0){
//             evens.push(number);
//         }
//     }
//     return evens;
// }

// const numbers = [22,33,55,66];
// const result = arrayOfEven(numbers);
// console.log('Even number of Array', result)


// sum of even number in array using function
// function sumOfArray(numbers) {
//     let sum = 0;
//     for (const number of numbers) {
//         if (number % 2 === 0) {
//             sum = sum + number;
//         }
//     }
//     return sum;
// }

// const numbers = [22, 33, 55, 66];
// const result = sumOfArray(numbers);
// console.log('Sum of Even in Array', result);


// sum of odd number in array using function
// function sumOfOddNumber(numbers) {
//     let sum = 0;
//     for (const number of numbers) {
//         if (number % 2 === 1) {
//             sum = sum + number;
//         }
//     }
//     return sum;
// }

// const numbers = [33, 22, 77, 99];
// const result = sumOfOddNumber(numbers);
// console.log('Sum of Odd number', result);


