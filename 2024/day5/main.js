const { readFileSync } = require("node:fs");

const input = readFileSync("input.txt").toString();
const rulelist = [];   
const rules = [];
const versions = [];
input.split('\n\n')[0].split('\n').forEach(l => rulelist.push(l.split('|')));
input.split('\n\n')[1].split('\n').forEach(l => versions.push(l.split(',')));

let sum = 0;

const indecies = [];
rulelist.forEach(rule => {

});
indecies.forEach((i, v) => rules[i] = v);

console.log(indecies);
console.log(rules);

versions.forEach(ver => {
    const output = [];
    rules.forEach(rule => {
        if (ver.includes(rule)) output.push(rule);
    });

    const mid = (output.length - 1) / 2 + 1;
    sum += output[mid];
});

console.log(sum);

