// Import the fromJS function from the Immutable.js
const { fromJS } = require('immutable');

// Function tha converts a plain Javascript object to an immutable 
function getImmutableObject(object) {
  return(fromJS(object));
}

plainObject = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
}

const theobject = getImmutableObject(plainObject);
console.log(theobject.toString);
console.log(theobject.get('sell'));
