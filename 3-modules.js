
// CommongJS, every file is a module by default
// Modules, encapsulated code where we only share the minimum amount

// To import a module, you can 'require' it in using Node. This follows the directory path it's getting imported from,
// or the module you're importing from the node_modules folder after installing a package. 
// As per normal JavaScript syntax, you can use object destructuring, or rename modules if they're the default export.

const names = require("./4-firstModule")
const sayHi = require("./5-secondModule")
const { items, singlePerson } = require("./6-alternativeModule")

// A mind grenade in this instance is that you can require in a module from another value, and if that module invokes a
// function, then it will execute when you run that file. 
// In this example, mindGrenade will invoke the function it declares in its body.

require('./7-mindGrenade')

// sayHi(names.jon)
// sayHi(names.peter)
// sayHi(names.susan)