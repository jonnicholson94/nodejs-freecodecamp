
// Streams are used for sending large sets of data in an efficient manner. 

const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt', { highWaterMark: 90000, encoding: 'utf8' })

// By default, the size of the buffer is 64kb. You can change this using the highWaterMark property when initialising
// the stream.

stream.on('data', (result) => {
    console.log(result);
})

stream.on('error', (error) => {
    console.log(error);
})