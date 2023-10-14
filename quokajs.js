const complements = (arr1, arr2) => {
  return arr1.filter((elem) => arr2.indexOf(elem) === -1);
};

let arr1 = ["a", "b", "c", "1", "2", "3"];
let arr2 = ["b", "c", "d", "e"];

console.log(complements(arr1, arr2));

////2 example adding value to object
const events = [
  {
    name: "First Event",
    metadata: {
      type: "public",
    },
  },
  {
    name: "Event 2",
    metadata: {
      type: "private",
    },
  },
  {
    name: "Third Event",
    metadata: {
      type: "closed",
    },
  },
];

const mappedEvents = events.map((e) => {
  if (e.name) {
    e = { ...e, name: "Second Event Mutated" };
  }
  return e;
});

console.log(mappedEvents);

/* OUTPUT -
  [ { name: 'Second Event Mutated', metadata: { type: 'public' } },
    { name: 'Second Event Mutated', metadata: { type: 'private' } },
    { name: 'Second Event Mutated', metadata: { type: 'closed' } } ]
  */

///3 example
// Find the number in an array that is closest to a given number

// sort based on distance from the reference value num, and then take the first item.
closestNumInArr = (arr, num) => {
  return arr.sort((a, b) => Math.abs(num - a) - Math.abs(num - b))[0];
};

console.log(closestNumInArr([5, 10, 15, 20, 25, 30, 35], 22));

//Given an array containing multiple number of max elements - count the number of max elements.
const arr = [1, 2, 2, 3, 4, 5, 4, 5];

function maxcount(arr) {
  arr = arr.sort((a, b) => b - a);
  const maxArr = Math.max(...arr);
  console.log(maxArr);
  let result = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === maxArr) {
      result++;
    }
  }
  return result;
}
console.log(maxcount(arr));
