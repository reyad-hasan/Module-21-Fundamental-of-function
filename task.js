// task one 01
// function multiply4(num1, num2, num3, num4) {
//     const result = num1 * num2 * num3 * num4;
//     return result;
// }

// const num1 = 10;
// const num2 = 15;
// const num3 = 20;
// const num4 = 25;

// const result = multiply4(num1, num2, num3, num4);
// console.log('Multiply Number is', result);


// task two 02
// function oddAndEven(num) {
//     if (num % 2 === 0) {
//         const result = num * num
//         return result;
//     }
//     else {
//         const result = num / 2;
//         return result;
//     }

// }

// const number = 20;
// const result = oddAndEven(number);
// console.log('even number multiply result', result);

// const number1 = 21;
// const result1 = oddAndEven(number1);
// console.log('odd number divide result',result1);



// ### Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// function calledMakeAvg(numbers){
//     const sum = [];
//     let sum2 = 0;
//     for(const number of numbers){
//         sum.push(number);
//     }
//     for(const sum3 of sum){
//         sum2 = sum2 + sum3;
//     }
//     const avg = sum2 / sum.length;
//     return avg;
// }


// function calledMakeAvg(numbers) {
//     let sum = 0;
//     for (const number of numbers) {
//         sum = sum + number;
//     }
//    const result = sum / numbers.length;
//     return result;
// }

// const numbers = [2, 5, 8];
// const result = calledMakeAvg(numbers);
// console.log('Avg number is', result);



// ### Task-4  
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
// function binaryString(str) {
//     let countZero = 0;
//     let countOne = 0;
//     for (const count of str) {
//         if (count === '0') {
//             countZero++;
//         }
//         else {
//             countOne++;
//         }
//     }
//     return {
//         'zero': countZero,
//         'one': countOne
//     };
// }

// const binary = '101001010';
// const result = binaryString(binary);
// console.log('Output is', result);
// const countOne = result.one;
// const countZero = result.zero;
// console.log(countOne, countZero);




// ### Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`
// function odd_even(number) {
//     if (number % 2 === 0) {
//         return `Even ${number}`;
//     }
//     else {
//         return `Odd ${number}`
//     }
// }

// const number = 21;
// const result = odd_even(number);
// console.log('Number is', result);
// console.log('Number is', odd_even(22));
// console.log('Number is', odd_even(23));