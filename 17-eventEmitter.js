
// In Node, there's a module called 'events' which is used to handle events.

const EventEmitter = require('events')

// In this instance, the 'EventEmitter' is a class, so you can invoke it on a variable like normal.

const customEmitter = new EventEmitter()

// You can then create events that perform a certain action when something happens - in this case, when emit calls 'response'
// It's also possible to pass in parameters to the callback function, which can then be accessed inside of the callback.

customEmitter.on('response', (name, id) => {
    console.log(`data received user ${name} with id of ${id}`);
})

// It's worth noting though, that the parameters are sequential, and you can't name the parameters like the below. This would
// return 'Jon' in the id variable based upon the emitter beneath it.

customEmitter.on('response', (id) => {
    console.log(`second response: ${id}`);
})

// Finally, to call an event, you use the emit keyword. You can then pass in parameters as discussed above.
// Note here - any events that invoke an 'on' need to be called after the 'on' is defined.

customEmitter.emit('response', 'Jon', 50 )