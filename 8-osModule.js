
// The OS module provides you with methods that can perform actions relating to the users OS. 

const os = require("os")

// Info about current user
const user = os.userInfo()

// Method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(currentOS);