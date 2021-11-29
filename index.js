import chalk from "chalk";
let cmd = process.argv.slice(2);
const [operation, ...numbers] = cmd;
console.log(numbers); //array

let total = numbers.reduce((acc, num) => {
  if (isNaN(num)) {
    console.log(
      `Sorry, the argument ${num} is not a number, please try again" `
    );
    process.exit();
  } else {
    acc += Number(num);
    return acc;
  }
}, 0);

if (operation === "sum") {
  console.log(chalk.bgGreen(total));
} else if (operation === "average") {
  let avg = total / numbers.length;
  console.log(chalk.bgRed(avg)); //node index average 1 2 3 4 5 6 ==>3.5

  //BONUS:
  /*
  Add support for an additional operation, "med", which calculates the Median number in the set.
   To calculate the median you will have to follow the steps below:

Sort the set of numbers
Get the index of the middle number by dividing the last index of the set by two: <last index> / 2
If the resulting index is a whole number (e.g. 7) then the median of the set is the 
value in that index.
Otherwise (if the number is a fraction, e.g. 7.5) then the median is calculated by adding the 
two values in the indexes around it (for 7.5 it would be 7, and 8) and dividing them by two.
Example (a): For the set 4 ,7, 8, 11, 24 the median index would be 2 (last index: 4, 4 / 2 = 2)
 and the median value is 8 (the number at position 2).

Example (b): For the set 1, 12, 15, 21 the median index would be 1.5 (last index: 3, 3 / 2 = 1.5)
and the median value would be 13.5 (the number at position 1: 12 + the number at position 2: 15 = 27, 27 / 2 = 13.5).


  */
} else if (operation === "med") {
  //sorted method
  numbers.sort((a, b) => a - b);
  let indexOfMiddleNumber = (numbers.length - 1) / 2;
  let median;

  //to check the numbers are integer or not
  if (Number.isInteger(indexOfMiddleNumber)) {
    median = numbers[indexOfMiddleNumber];
  } else {
    indexOfMiddleNumber = Math.floor(indexOfMiddleNumber);
    // console.log(indexOfMiddleNumber);
    median =
      (Number(numbers[indexOfMiddleNumber]) +
        Number(numbers[indexOfMiddleNumber + 1])) /
      2;
    console.log(median);
  }
} else {
  console.log(
    chalk.bgRed(
      `I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)`
    )
  );
}
