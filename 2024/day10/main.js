const { readFileSync } = require("node:fs");

// Parse input into 2D array
const input = readFileSync("input.txt").toString();
const map = [];
input.split('\n').forEach(l => map.push(l.split('')));
map.pop(); // Ignore empty line
const rows = map.length;
const cols = map[0].length;

const at = (x, y) => {
    if (x < cols && x >= 0 && y < rows && y >= 0) {
        return parseInt(map[y][x]);
    } else return -1;
}

const trailheads = [];

// Find 0s (trailheads)
for (let y = 0; y < rows; y++) 
for (let x = 0; x < cols; x++) {
    if (at(x, y) === 0) trailheads.push([x, y]);    
}

const navigate = ([x, y]) => {
    const head = at(x, y);
    let score = 0;

    if (head === 9) {
        map[y][x] = 'X';
        found.push([x,y]);
        return 1;
    }

    if (head+1 === at(x+1, y)) score += navigate([x+1, y]);
    if (head+1 === at(x-1, y)) score += navigate([x-1, y]);
    if (head+1 === at(x, y+1)) score += navigate([x, y+1]);
    if (head+1 === at(x, y-1)) score += navigate([x, y-1]);

    return score;
}

let score = 0;
const found = [];
trailheads.forEach(head => {
    const s = navigate(head);
    score += s;
    console.log(head, " - ", s);
    while (found.length) {
        const [x,y] = found.pop();
        map[y][x] = 9;
    }
});
console.log(score);

