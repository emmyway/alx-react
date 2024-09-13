/* function return the value of the
object at the defined path
 given in an array as as argument */
export default function accessImmutableObject(object, array) {
  return array.reduce((acc, key) => {
    // Check if acc is not undefined and has the property (key)
    return acc && acc[key] !== undefined ? acc[key] : undefined;
  }, object);
}
