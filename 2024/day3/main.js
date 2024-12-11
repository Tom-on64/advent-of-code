const { readFileSync } = require("node:fs");

const input = readFileSync("input.txt").toString();
const chars = input.split('');
let ptr = 0;
let out = 0;
let domul = true;

function num() {
    let ret = 0;

    while (chars[ptr].match(/[0-9]/)) {
        ret *= 10;
        ret += parseInt(chars[ptr++]);
    }

    return ret;
}

function mul() {

    let lhs;
    let rhs;

    if (chars[ptr] !== '(') return;
    ptr++;

    if (chars[ptr].match(/[0-9]/)) lhs = num();
    if (lhs <= 0) return;

    if (chars[ptr] !== ',') return;
    ptr++;

    if (chars[ptr].match(/[0-9]/)) rhs = num();
    if (rhs <= 0) return;

    if (chars[ptr] !== ')') return;
    ptr++;

    if (domul) out = out + lhs * rhs;
}

function _do() {
    console.log("DO");
    if (chars[ptr] !== '(') return;
    if (chars[++ptr] !== ')') return;
    ptr++;
    console.log("DONE");
    domul = true;
}

function dont() {
    console.log("DONT");
    if (chars[ptr] !== '(') return;
    if (chars[++ptr] !== ')') return;
    ptr++;
    console.log("DONTNE");
    domul = false;
}

while (ptr < chars.length) {
    if (chars[ptr].match(/[A-Za-z]/)) { // A string
        let str = "";

        while (chars[ptr].match(/[A-Za-z']/)) str += chars[ptr++];
        console.log(str);

        if (str.match(/.*mul/)) mul();
        else if (str.match(/.*don't/)) dont();
        else if (str.match(/.*do/)) _do();
    } else ptr++;
}

console.log("Result: " + out);

