// Code your solutions in this file

function printBadges(badgeArr) {
    for (let i = 0; i < badgeArr.length; i++) {
        console.log('Welcome ' + badgeArr[i] + '! You are employee #' + (i + 1) + '.');
    }
    return badgeArr
}

function tailsNeverFails() {
    let flips = 0;
    while (Math.random() >= 0.5) {
        flips++;
    }
    return `You got ${flips} tails in a row!`
}


// const tailsNeverFails = ()