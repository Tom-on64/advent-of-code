const { readFileSync } = require("node:fs");

const input = readFileSync("input.txt").toString();
let stones = [];
input.split(' ').forEach(s => stones.push(parseInt(s)));

const blink = (stoneList) => {
    const newList = [];
    stoneList.forEach(stone => {
        if (stone === 0) {
            newList.push(1);
        } else if (stone.toString().length % 2 === 0) {
            const n = stone.toString();
            newList.push(parseInt(n.substr(0, n.length/2)));
            newList.push(parseInt(n.substr(n.length/2, n.length/2)));
        } else {
            newList.push(stone * 2024);
        }
    });
    return newList;
}


console.log("Initial stones:", stones);

for (let i = 0; i < 25; i++) {
    stones = blink(stones);
    console.log(`${i+1}. blink:`, stones);
}

console.log("Stone Count:", stones.length);

