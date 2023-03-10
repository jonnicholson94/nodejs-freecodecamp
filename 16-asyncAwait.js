

/*
In Node, there's a few ways of handling async programming and promises.
At a high level:
    - You can append '.promises' onto the end of module imports. For example, the following would turn fs modules into promises:
        const { readFile, writeFile } = require('fs).promises
    - You can important the util module, and 'promisify' functions, like so:
        - const readFilePromise = util.promisify(readFile)
        - const writeFilePromise = util.promisify(writeFile)
    - You can create custom functions which return new Promises, and add chains to them
    - Or you can use async / await and try / catch combined
Generally, async / await combined with try / catch is probably the cleanest code, but there's a few variations you may see.
Utilising this is a good way to avoid having to implement callbacks into functions, and keeps code readable and clean.
*/

const { readFile, writeFile } = require('fs').promises

const start = async () => {

    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')

        console.log(first, second);

        await writeFile('./content/write-file-promise.txt', `${first}, ${second}`)

        console.log("Successfully written the file")

    } catch (error) {
        console.log(error);
    }

}

start()