const { readFileSync } = require("node:fs");

const input = readFileSync("input.txt").toString();
const table = [];
input.split('\n').forEach(line => table.push(line.split('')));
const rows = table.length;
const cols = table[0].length;

let xmas = 0;

const at = (x, y) => {
    if (x > cols || x < 0) return 'E';
    if (y > rows || y < 0) return 'E';

    return table[y][x]
}


const findWord = (x, y, dx, dy, word = "XMAS") => {
    for (let i = 0; i < word.length; i++) {
        if (at(x + i*dx, y + i*dy) !== word[i]) return 0;
    }
    return 1;
}

for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
        if (at(x, y) !== 'X') continue;

        if (findWord(x, y,  1,  0)) xmas++;
        if (findWord(x, y, -1,  0)) xmas++;
        if (findWord(x, y,  0,  1)) xmas++;
        if (findWord(x, y,  0, -1)) xmas++;
        if (findWord(x, y,  1,  1)) xmas++;
        if (findWord(x, y, -1,  1)) xmas++;
        if (findWord(x, y,  1, -1)) xmas++;
        if (findWord(x, y, -1, -1)) xmas++;
    }
}

console.log(xmas);

let x_mas = 0;

for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
        if (at(x, y) !== 'M') continue;

        if (findWord(x, y,  1,  0)) x_mas++;
        if (findWord(x, y, -1,  0)) x_mas++;
        if (findWord(x, y,  0,  1)) x_mas++;
        if (findWord(x, y,  0, -1)) x_mas++;
        if (findWord(x, y,  1,  1)) x_mas++;
        if (findWord(x, y, -1,  1)) x_mas++;
        if (findWord(x, y,  1, -1)) x_mas++;
        if (findWord(x, y, -1, -1)) x_mas++;
    }
}

console.log(x_mas);

