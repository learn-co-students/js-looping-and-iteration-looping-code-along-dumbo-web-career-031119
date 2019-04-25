// Code your solutions in this file

arr = ['Ada', 'Brendan', 'Ali'];

function printBadges(arr) {
  // newArr = []
  for (let i = 0; i < arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i + 1}.`);
  }
  return arr;
  console.log(arr);
}
printBadges(arr);

function tailsNeverFails() {
  n = Math.random();
  let flips = 0;
  while (n >= 0.5) {
    flips++;
  }
  return `You got ${flips} tails in a row!`
}


console.log(tailsNeverFails())
