
// When running apps with external dependencies, we need a package.json file.
// This is created by running npm init, or you can manually create a package.json at the root of your directory.
// When installing dependencies, you can install them by project, globally or mark them by which environment they're needed.
// This is done through npm.

// Dev dependencies are dependencies installed to support the development experience, and reduce bloat in production.
// The command to do this is either:
// npm i package -D
// npm i package --save-dev

const _ = require("lodash")

// In the below example, the lodash flattenDeep function is stored within the node_modules folder.
// That means that you can go in and manually view the function within the flattenDeep file (in this example).

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems)
console.log("Hello people");