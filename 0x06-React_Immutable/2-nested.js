export default function accessImmutableObject(object, array) {
  // Start from the given object
  let result = object;

  // Iterate over each key in the array to access the value at the defined path
  for (let i = 0; i < array.length; i += 1) {
    // If the key exists, update result to the corresponding value
    if (result[array[i]] !== undefined) {
      result = result[array[i]];
    } else {
      // If any key in the path doesn't exist, return undefined
      return undefined;
    }
  }

  // Return the final value, which could be a string, object, or Map
  return result;
}
