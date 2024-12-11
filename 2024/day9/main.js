const { readFileSync } = require("node:fs");

const input = readFileSync("input.txt").toString();
const data = [];
input.split('').forEach(c => data.push(parseInt(c)));

const processed = [];
let id = 0;
let isBlank = false;
data.forEach(d => {
    if (isBlank) c = '.';
    else c = (id++).toString();
    for (let i = 0; i < d; i++) processed.push(c);
    isBlank = !isBlank;
});

const swap = (a, b, d) => {
    const tmp = d[a];
    d[a] = d[b];
    d[b] = tmp;
}

for (let i = processed.length-1; i >= 0; i--) {
    if (processed[i] === '.') continue;

    id = processed[i];
    let len = 0;
    while (processed[i] === id) { i--; len++; }
    
    // Find free space
    for (let j = 0; j < processed.length; j++) {
        if (processed[j] === '.' && j < i) {
            let freelen = 0;
            while (processed[j] === '.') { freelen++; j++; }
            if (freelen < len) continue;

            while (len > 0) {
                swap(i+len, j-freelen, processed);
                freelen--;
                len--;
            }
            break;
        }
    }
    i++; // Off by one error
}

let checksum = 0;
processed.forEach((b, i) => {
    if (b !== '.') checksum += b*i;
    if (isNaN(checksum)) {
        console.log(b, i);
        return;
    }
});

console.log(checksum);

