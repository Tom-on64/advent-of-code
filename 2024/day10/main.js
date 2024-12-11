const { readFileSync } = require("node:fs");

// Parse input into 2D array
const input = readFileSync("input.txt").toString();
const map = [];
input.split('\n').forEach(l => map.push(l.split('')));
const rows = map.length;
const cols = map[0].length;
map.pop(); // Ignore empty line

const at = (x, y) => {
    if (x < cols && x > 0 && y < rows && y > 0) {
        return map[y][x];
    }

    throw new Error("Out of range!");
}



