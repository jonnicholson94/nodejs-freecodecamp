
/** 
 * The event loop is what allows Node to perform non-blocking IO operations by offloading operations to the system kernel
 * when possible.
 * JavaScript is synchronous and single threaded - essentially, it reads line by line.
 * It will only run the next task after it has completed a previous task: unless it's marked as asynchronous.
 * As a result, if you have multiple asynchronous operations, the synchronous operations will execute first.
 */

const { readFile } = require('fs')

console.log("Started first task");

readFile('./content/first.txt', 'utf8', ( err, result ) => {
    if (err) {
        console.log(err);
        return 
    }

    console.log(result)
    console.log("Completed first task");
})

console.log("Starting timeout");

setTimeout(() => {
    console.log("Second");
}, 0)

console.log("Starting next task.");
