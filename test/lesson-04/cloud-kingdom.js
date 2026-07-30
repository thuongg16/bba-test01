let playerName = "Mario";
let currentLives = 3;

const level1 = 25;
const level2 = 30;
const level3 = 45;

function totalCoins(level1, level2, level3) {
    return level1 + level2 + level3;
}

function averageValue() {
    let total = totalCoins(level1, level2, level3);
    let average = total/3; //currentLives
    console.log(`Average: ${average}`);

    let remainder = total % 3;
    console.log("Remainder:", remainder);
}

averageValue();