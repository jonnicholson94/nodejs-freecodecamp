
const { readFile, writeFile } = require('fs')

// FS also has access to asynchronous read and write methods, which take callbacks as parameters and perform an action
// based upon the result.
// Otherwise, the context is largely the same.

/**
 * What makes the readFile / writeFile methods good is the asynchronous nature of them. 
 * However, the code used to define them can get messy quickly, with lots of nested callbacks (like in this example).
 */

console.log("Starting job..");

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return null
    } 

    const first = result 

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return null 
        }

        const second = result

        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return null 
            }

            console.log("Done job");
        })
    })
})

console.log("Starting next task...");

