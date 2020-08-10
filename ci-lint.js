console.log('::error file=.vale.ini,line=1,col=1::Test2')
const fs = require('fs');
const stdin = fs.readFileSync(0, 'utf-8');

console.log('Vale output:', stdin)