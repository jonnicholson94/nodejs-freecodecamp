
// There are two more ways to export a module.
// The first is as follows - by appending a variable / function to module.exports

module.exports.items = ['item1', 'item2', 'item3']

const person = {
    name: 'jon'
}

// And the second is similar to before, but marking it as equal to a variable.

module.exports.singlePerson = person
