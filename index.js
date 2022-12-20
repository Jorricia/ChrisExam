const {findTheTreasure} = require("./findTheTreasure");

const startingPosition = [0,0]
const direction = "North";
const instructions = [
    "Forward",
    "Forward",
    "Left",
    "Forward",
    "Forward",
    "Left"
];
console.log(findTheTreasure(startingPosition,direction,instructions));