
const sayHi = (name) => {
    console.log(`Hello there ${name}`);
} 

// If you're only exporting one thing, you can overwrite the default object with whatever you're exporting.

module.exports = sayHi