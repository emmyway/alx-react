// Import the Map function from the Immutable.js
const { Map } = require('immutable');

// Function that converts a plain Javascript object to an immutable Map
function getImmutableObject(object) => {
  return(Map(object));
}
