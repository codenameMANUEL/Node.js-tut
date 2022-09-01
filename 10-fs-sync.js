const { readFileSync, writeFileSync } = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//console.log(first);
writeFileSync(
 './content/result-sync.txt',
 `This is the written file: ${first}, ${second}`,
 {flag:'a'}
 )
console.log('done with the task');
console.log('strating the next one');