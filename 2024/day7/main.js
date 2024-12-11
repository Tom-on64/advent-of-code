const { readFileSync } = require("node:fs");

const MAXOP = 3;    // 2 - only '+' and '*'; 3 - also '||'

const input = readFileSync("input.txt").toString();
const lines = input.split('\n');
lines.pop();
let sum = 0;

lines.forEach(line => {
    const [ res, equTxt ] = line.split(':');
    const equ = equTxt.split(' ');
    equ.shift(); // Ignore leading space
    const opcount = equ.length - 1;

    for (let i = 0; i < MAXOP**opcount; i++) {
        const ops = i.toString(MAXOP).padStart(opcount, '0').split('');
        let out = parseInt(equ[0]);
        ops.forEach((op, j) => {
            if (op == 0) out += parseInt(equ[j+1]);
            else if (op == 1) out *= parseInt(equ[j+1]);
            else if (op == 2) out = parseInt(out.toString() + equ[j+1].toString());
        });

        if (out == res) {
            process.stdout.write(equ[0]);
            ops.forEach((op, j) => process.stdout.write(` ${(op == 2) ? "||" : (op == 1) ? "*" : "+"} ${equ[j+1]}`));
            console.log(` = ${res} (${sum})`);
            sum += parseInt(out);
            break;
        }
    }
});

console.log(sum);

