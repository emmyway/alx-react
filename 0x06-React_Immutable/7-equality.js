// Importing the is function and Map from Immutable.js
import { is } from 'immutable';

// Creating the areMapsEqual function
export default function areMapsEqual(map1, map2) {
  return is(map1, map2);
}
