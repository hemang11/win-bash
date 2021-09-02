#!/usr/bin/env node
const {sum} = require('../index'); // {} will extract only specific functions from index we can also use require('index').sum
console.log(sum(1,2));