const { readFileSync } = require("node:fs");

// Parse input into 2D array
const input = readFileSync("input.txt").toString();
const map = [];
input.split('\n').forEach(l => map.push(l.split('')));
const rows = map.length;
const cols = map[0].length;

console.log(map);

