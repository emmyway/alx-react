// Importing the Map from Immutable.js
import { Map } from 'immutable';

// Creating the first map with the given object
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

// Creating map2 by modifying map, updating the values for keys 2 and 4 using withMutations
export const map2 = map.withMutations((tempMap) => {
  tempMap.set(2, 'Benjamin').set(4, 'Oliver');
});
