//Create a function which returns a random number in the given range of values both inclusive
function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
  return rangeStart + Math.round(Math.random() * (rangeEnd - rangeStart));
}

randomNumberGeneratorInRange(10, 50);

//Write a program to reverse a string

const str = "JavaScript is awesome";
str.split("").reverse().join(""); // "emosewa si tpircSavaJ"

//Write a program to reverse a string by words. Also show the reverse of each words in place
const str = "JavaScript is awesome";
str
  .split(" ")
  .map((val) => val.split("").reverse().join(""))
  .join(" "); // "tpircSavaJ si emosewa"

//Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'

// Example
getTheGapX("XeroX"); // 4
getTheGapX("Xamarin"); // -1       (If there is only single character 'X')
getTheGapX("JavaScript"); // -1       (If there is no character 'X')
getTheGapX("F(X) !== G(X) !== F(X)"); // 18

function getTheGapX(str) {
  if (!str.includes("X")) {
    return -1;
  }

  const firstIndex = str.indexOf("X");
  const lastIndex = str.lastIndexOf("X");
  return firstIndex === lastIndex ? -1 : lastIndex - firstIndex;
}

//https://github.com/MateenCode/CardioAlgorithm-Javascript

// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'
function reverseString(str) {
  return str.split("").reverse("").join("");
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
function isPalindrome(str) {
  const revStr = str.split("").reverse().join("");
  return revStr === str;
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125
function reverseInt(int) {
  return int.toString().split("").reverse().join("");
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((char) => char[0].toUpperCase() + char.substring(1))
    .join(" ");
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  let arr = str.split("");
  let count = {};

  for (let val of arr) {
    count[val] ? count[val]++ : (count[val] = 1);
  }

  return Object.keys(count).reduce((a, b) => (count[a] > count[b] ? a : b));
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuz");
    } else if (i % 3 === 0) {
      console.log("Buzz");
    } else if (i % 5 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}
// Call Function
const output = maxCharacter("javascript");

console.log(output);

// CHALLENGE 1: LONGEST WORD
// Return the longest word or words of a string
// ex. longestWord('Hi there, my name is Mateen') === 'there,' .match(/[a-z0-9]+/g)
function longestWord(sen) {
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  const sorted = wordArr.sort((a, b) => b.length - a.length);
  const filterArr = sorted.filter((word) => word.length === sorted.length);
  return filterArr.length === 1 ? filterArr[0] : filterArr;
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
function chunkArray(arr, len) {
  const chunkedArr = [];
  arr.forEach((each) => {
    const last = chunkedArr[chunkedArr.length - 1];
    return !last || last.length === len
      ? chunkedArr.push([each])
      : last.push(each);
  });
  return chunkedArr;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
function flattenArray(arrays) {
  return arrays.reduce((a, b) => [...a, ...b]);
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'
// Anagrams are word with the same length of charaters and can be rearranged to make new word
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let lookup = {};

  for (let i = 0; i < str1.length; i++) {
    lookup[str1[i]] ? lookup[str1[i]]++ : (lookup[str1[i]] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    if (!lookup[str2[i]]) return false;
    lookup[str2[i]]--;
  }

  return true;
}

// CHALLENGE 5: Find Number
// Find if the element is present in the array or not.
// ex.
// findNumber([1,2,3,4,5], 1) === YES
// findNumber([1,2,3,4,5], 7) === NO
function findNumber(arr, k) {
  return arr.some((word) => word === k) ? "YES" : "NO";
}

// CHALLENGE 6: Odd Numbers
// find the odd numbers between the 2 given ranges of input field
// ex.
// oddNumbers(2,5) === [3 5]
// oddNumbers(3,9) === [3,5,7,9]
function oddNumbers(l, r) {
  let arr = [];
  for (l; l <= r; l++) {
    arr.push(l);
  }

  return arr.filter((n) => n % 2);
}

// Call Function
const output = isAnagram("anagram", "nagaram");

console.log(output);

// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

// '...' the rest operator takes all the numbers being passed and stores it into a array
function addAll(...numbers) {
  return numbers.reduce((a, b) => a + b);
}

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(num) {
  let total = 0;

  const checkIfPrime = (num) => {
    for (let j = 2; j < num; j++) {
      if (num % j === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 2; i <= num; i++) {
    if (checkIfPrime(i)) {
      total += i;
    }
  }
  return total;
}

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy(arr, ...rest) {
  return arr.filter((val) => !rest.includes(val));
}

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a) {
  const arr1 = [];
  const arr2 = [];

  a.forEach((val, i) => (val === -1 ? arr1.push(i) : arr2.push(val)));

  const sortArr = arr2.sort((a, b) => a - b);

  arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));

  return sortArr;
}

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {
  let compare = str.charCodeAt(0);
  let missing;

  str.split("").map((char, i) => {
    if (str.charCodeAt(i) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {
  let even = 0;
  let odd = 0;

  for (let val of arr) {
    val % 2 === 0 ? (even += val) : (odd += val);
  }

  return [even, odd];
}

const a = [-1, 150, 160, 170, -1, -1, 180, 190];

const output = sortByHeight(a);

console.log(output);

//https://github.com/sagar0937/Awesome-JavaScript-Interviews/blob/master/Large-Collection-of-Popular-Problems-with-Solutions/Objects-Master-List-of-Problems-Super-Useful-Daily-Techniques/Object-of-arrays-with-further-nested-array-return-an-element-meeting-condition.js
// From the below object of arrays get the full single object with id === 2
const roles = {
  globalRoles: [
    {
      id: 1,
      shop_id: null,
      global: true,
      name: "owner",
    },
    {
      id: 2,
      shop_id: null,
      global: true,
      name: "admin",
    },
    {
      id: 3,
      shop_id: null,
      global: true,
      name: "super admin",
    },
  ],
  customRoles: [
    {
      id: 4,
      shop_id: 1,
      global: false,
      name: "custom user 1",
    },
    {
      id: 5,
      shop_id: 1,
      global: false,
      name: "custom user 2",
    },
  ],
};

const requiredData = Object.values(roles)
  .reduce((acc, arr) => acc.concat(arr), [])
  .find((role) => role.id === 2);

console.log(requiredData);

// Output => { id: 2, shop_id: null, global: true, name: 'admin' }
