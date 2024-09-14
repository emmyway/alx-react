import { Map, fromJS, Seq } from 'immutable';

// Function to capitalize the first letter of a string
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// Function to print best students with score >= 70
export default function printBestStudents(grades) {
  // Convert the plain object to an Immutable Map
  const immutableGrades = fromJS(grades);

  // Use seq to filter and format the data
  immutableGrades
    .toSeq() // Convert to Seq to use seq methods
    .filter((student) => student.get('score') >= 70) // Filter students based on score
    .map((student) => {
      // Capitalize the names
      const firstName = capitalize(student.get('firstName'));
      const lastName = capitalize(student.get('lastName'));

      // Return the formatted student object
      return student.set('firstName', firstName).set('lastName', lastName);
    })
    .forEach((student) => {
      // Print the formatted student information
      console.log({
        score: student.get('score'),
        firstName: student.get('firstName'),
        lastName: student.get('lastName'),
      });
    });
}
