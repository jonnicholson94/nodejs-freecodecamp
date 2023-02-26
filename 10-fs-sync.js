
// The FS module gives you access to the file system of the user.

const { readFileSync, writeFileSync } = require("fs")

// readFileSync allows you to fetch the content of a given file, and decode it using a given style.

console.log('start')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')


console.log(first, second);

// writeFileSync allows you to (unsurprisingly) write a file and place it in a given directory.

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, { flag: 'a' })

console.log("done with this task")
console.log("starting the next one")