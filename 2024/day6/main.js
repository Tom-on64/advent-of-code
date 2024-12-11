const { readFileSync } = require("node:fs");

// Direction constants
const UP = 0;
const DOWN = 1;
const LEFT = 2;
const RIGHT = 3;

// Parse input map into 2D array
const input = readFileSync("input.txt").toString();
const map = [];
input.split('\n').forEach(line => map.push(line.split('')));

// Assuming it is square
const rows = map.length;
const cols = map[0].length;

// Returns the coordinates of a moved player
const move = (p) => {
    switch (p.dir) {
        case UP: return [ p.x, p.y-1 ];
        case DOWN: return [ p.x, p.y+1 ];
        case LEFT: return [ p.x-1, p.y ];
        case RIGHT: return [p.x+1, p.y ];
    }

    throw new Error("Unknown direction value: " + p.dir + "!");
}

// Returns the new player direction
const rotate = (p) => {
    switch (p.dir) {
        case UP: return RIGHT;
        case RIGHT: return DOWN;
        case DOWN: return LEFT;
        case LEFT: return UP;
    }

    throw new Error("Unknown direction value: " + p.dir + "!");
}

// Find player
const player = { x: 0, y: 0, dir: UP };
map.forEach((l, y) => {
    l.forEach((t, x) => {
        if (t === '^') {
            player.x = x;
            player.y = y;
            map[y][x] = '.';
        }
    });
});

// While player is in-bounds
while (true) {
    const [ x, y ] = move(player);
    console.log(x, y);
    map[player.y][player.x] = 'X';
    if (x >= cols || x < 0 || y >= rows || y < 0) break;

    if (map[y][x] === '#') {
        player.dir = rotate(player);
        continue;
    }

    player.x = x;
    player.y = y;
}


let walked = "";
let count = 0;
map.forEach(l => {
    walked += l.join('');
    walked += '\n';
    l.forEach(t => { if (t === 'X') count++; });
});
console.log(`W: ${cols}; H: ${rows}`);
console.log(walked);
console.log(count);

