function createGroups(arr, numGroups) {
  const remainder = arr.length / numGroups;
  const perGroup = Math.ceil(arr.length / numGroups);
  // was considering to put a condition based on the remainder and
  // using Math.floor in some cases and then appending the remainder to the last element
  // The reason for this is that many test cases lead to empty arrays being appended to the
  // output array
  return new Array(numGroups)
    .fill("")
    .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
}

//test cases
let arrayEntered = [1, 2, 3, 4, 5];
let numberOfGroups = 3;

console.log("derd, splitting ", arrayEntered);
console.log("derd, into " + numberOfGroups + " equally sized arrays");
console.log("derd, acc", createGroups(arrayEntered, numberOfGroups));

arrayEntered = [1, 2, 3, 4, 5, 6, 7, 8];
numberOfGroups = 3;

console.log("derd, splitting ", arrayEntered);
console.log("derd, into " + numberOfGroups + " equally sized arrays");
console.log("derd, acc", createGroups(arrayEntered, numberOfGroups));

arrayEntered = [1, 2, 3, 4, 5, 6, 7, 8];
numberOfGroups = 2;

console.log("derd, splitting ", arrayEntered);
console.log("derd, into " + numberOfGroups + " equally sized arrays");
console.log("derd, acc", createGroups(arrayEntered, numberOfGroups));

arrayEntered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
numberOfGroups = 10;

console.log("derd, splitting ", arrayEntered);
console.log("derd, into " + numberOfGroups + " equally sized arrays");
console.log("derd, acc", createGroups(arrayEntered, numberOfGroups));
