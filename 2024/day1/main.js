const { readFileSync } = require("node:fs");

const input = readFileSync("input.txt").toString();
const lines = input.split('\n');
lines.pop(); // Remove empty last line

let col1 = [];
let col2 = [];

lines.forEach(l => {
    const cols = l.split('   ');

    col1.push(parseInt(cols[0]));
    col2.push(parseInt(cols[1]));
});

col1 = col1.sort();
col2 = col2.sort();

let dist = 0;

for (let i = 0; i < lines.length; i++) dist += Math.abs(col1[i] - col2[i]);

console.log("Distance: ", dist);

let sim = 0
col1.forEach(c1 => {
    let count = 0;
    col2.forEach(c2 => {
        if (c1 === c2) count++;
    });

    sim += c1 * count;
});

console.log("Simularity: ", sim);

