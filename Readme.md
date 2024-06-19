# Custom Event Emitter

A simple event emiiter utility to subscribe, emit and release events.

## Installation

```sh
npm install my-custom-event-emitter
```

## Usage

### Example:

```sh
# import package
const Emitter = require("my-custom-event-emitter");

# initialise the constructor from imported package
const emitter = new Emitter();

# subscribe expects two arguments, one is event type and other is callback
emitter.subscribe('message', (args) => console.log(args));

# emit takes take multiple arguments where the first argument must with event type which you wan to emit
emitter.emit('message', 'arg1', 'arg2');

# release the event type by passing event type as argument to release method
emitter.release('message');
```
