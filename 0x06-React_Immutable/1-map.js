// Import the Map function from the Immutable.js
import { Map } from 'immutable';

// Function that converts a plain Javascript object to an immutable Map
export default function getImmutableObject(object) {
  return Map(object);
}
