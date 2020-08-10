const fs = require('fs');
const stdin = fs.readFileSync(0, 'utf-8');

const result = JSON.parse(stdin);

for (let file in result) {
    for (let annotation of result[file]) {
        console.log(`::error file=${file},line=${annotation.Line},col=${annotation.Span[0]}::${annotation.check}: ${annotation.Message}`)
    }
}