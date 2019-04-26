// Code your solutions in this file


const printBadges = (namesArr) => {
    for (let i = 0; i < namesArr.length; i++) {
        console.log(`Welcome ${namesArr[i]}! You are employee #${i+1}.`);
    }
   return namesArr; 
}




function maybeTrue() {
    return Math.random() >= 0.5;
}

function tailsNeverFails() {
    let counter = 0
    while (maybeTrue()) {
        counter++;
    }
  return `You got ${counter} tails in a row!`
}




