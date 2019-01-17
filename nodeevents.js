const events = require('events');

var eventEmitter = new events.EventEmitter();

// Result of Event
var message = function() {
    console.log("You Fired Of An Event!");
};

// Create Listener
eventEmitter.on('evnt', message);

//eventEmitter.emit('evnt');

exports.nodeevents = () => {eventEmitter.emit('evnt')};