function solution(n) {
    return 2 ** (n.toString(2).split("").reverse().join("").indexOf("0", n.toString(2).split("").reverse().join("").indexOf("0") + 1));
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test secondRightmostZeroBit

// alternative solution
