const { readFileSync } = require("node:fs");

const input = readFileSync("input.txt").toString();
const lines = input.split('\n');
lines.pop(); // remove empty line

const checkLevels = (levels) => {
    const diffSign = Math.sign(levels[0] - levels[1]);
    if (diffSign === 0) return 0;

    for (let i = 1; i < levels.length; i++) {
        const level = levels[i];
        const oldLevel = levels[i-1];

        const diff = oldLevel - level;
        if (Math.sign(diff) !== diffSign) return i;

        const dist = Math.abs(diff);
        if (dist > 3) return i;
    }
    
    return -1;
}

let safeCount = 0;
lines.forEach(line => {
    const levels = line.split(' ');

    const errIndex = checkLevels(levels);
    if (errIndex === -1) {
        safeCount++;
        return;
    }

    const newLevels = [];
    for (let i = 0; i < levels.length; i++) {
        if (i !== errIndex) newLevels.push(levels[i]);
    }

    if (checkLevels(newLevels) === -1) safeCount++;
});

console.log("Safe: ", safeCount);

