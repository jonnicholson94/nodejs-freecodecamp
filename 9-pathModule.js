
// The path module provides you with methods that allow you to work with file paths.

const path = require("path")

console.log(path.sep);

// .join() puts path paramaters together into a single string.

const filePath = path.join('/content', 'subfolder', 'test.txt')

console.log(filePath);

// The basename method returns the overall file a path points to.

const base = path.basename(filePath)
console.log(base);

// Resolve works similar to join, but returns the overall path from the root.
// In this example, __dirname is useful because it allows you to access the correct filepath across different environments.
// For example, the filepath on your server is likely to be different to the one on your local machine.
// With __dirname, you'd be able to handle both situations.

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')

console.log(absolute);