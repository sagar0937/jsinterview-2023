//https://github.com/sagar0937/Awesome-JavaScript-Interviews/tree/master/Large-Collection-of-Popular-Problems-with-Solutions/Objects-Master-List-of-Problems-Super-Useful-Daily-Techniques

/* I have an object:
myObject = { 'a': 1, 'b': 2, 'c': 3 } 2
Implement a method similar to Array.prototype.map that would be used as follows:
newObject = myObject.map(function (value, label) {
    return value * value;
});
newObject is now { 'a': 1, 'b': 4, 'c': 9 }
*/

// There's no map() native function for objects, so here's a similar implementation

myObject = { a: 1, b: 2, c: 3 };
console.log(myObject);

mapForObject = (obj) => {
  Object.keys(obj).map((key) => (obj[key] = obj[key] * 2));
  return obj;
};
console.log(mapForObject(myObject)); // => { a: 2, b: 4, c: 6 }

/* SOLUTION-2 (WITHOUT MUTATING)  the previous methods do not return a new object, but rather operate on the object itself. So, this below solution returns a new object and leaves the original object as it is: */

mapFunctionForObject = (obj) => {
  return Object.keys(obj).reduce((accum, curr) => {
    accum[curr] = obj[curr] * 2;
    return accum;
  }, {});
};

console.log(mapFunctionForObject(myObject)); // => { a: 2, b: 4, c: 6 }

//Here, I have to convert an array of objects to array of objects adding new fields dynamically
//Original data received from API
suggestions = [
  { label: "Afghanistan" },
  { label: "Aland Islands" },
  { label: "Albania" },
  { label: "Algeria" },
];

/*BUT I need data in following format
[ { value: 'Afghanistan', label: 'Afghanistan' },
  { value: 'Aland Islands', label: 'Aland Islands' },
  { value: 'Albania', label: 'Albania' },
  { value: 'Algeria', label: 'Algeria' } ]
 */

const suggestions = [
  { label: "Afghanistan" },
  { label: "Aland Islands" },
  { label: "Albania" },
  { label: "Algeria" },
].map((suggestion) => ({
  value: suggestion.label,
  label: suggestion.label,
}));

// console.log(suggestions);

/* ************* SECOND USE CASE ********************
Here, I have to convert an array of arrays to array of objects adding new fields dynamically
Original data received from API
[["2019-04-01", 21.66], ["2019-03-01", 21.27]];
BUT I need data in following format
const Requireddata = [
  { date: "2010-06-10T07:00:00.000Z", close: 250.51 },
  { date: "2010-06-11T07:00:00.000Z", close: 253.51 }
]
 */

const originalData = [
  ["2019-04-01", 21.66],
  ["2019-03-01", 21.27],
];

const requiredData = originalData.map((i) => ({
  date: i[0],
  close: i[1],
}));

console.log(requiredData);

/* Sometimes, you might find that it’s easier to use an array for your list of items. For example, when you are rendering a list. It’s easier to have an array, use a map and create the element in each iteration.
This has an easy solution. Instead of accessing directly the state, use a function. What is also known as a selector.
A selector is a function that takes some state and returns the data you need.
This is the opposite of what Redux normalization would do - i.e. normalization of Redux state means converting an array-of-objects to objects-of-objects
 */

// object
const comments = {
  1: { id: "1", text: "please add code examples" },
  2: { id: "2", text: "examples would be great for this article" },
  3: { id: "3", text: "hi there" },
};

/* But I need the data in the below format
  [ { id: '1', text: 'please add code examples' },
    { id: '2', text: 'examples would be great for this article' },
    { id: '3', text: 'hi there' } ]
  */

const commentsSelector = (commentObj) => {
  return Object.keys(commentObj).map((commentKey) => commentObj[commentKey]);
};

console.log(commentsSelector(comments));

/////////////////////////////////////////////////////////
const data = {
  "2019-03-29": {
    open: "2828.27",
    close: "2834.40",
    high: "2836.03",
    low: "2819.23",
    volume: "0",
  },
  "2019-03-28": {
    open: "2809.40",
    close: "2815.44",
    high: "2819.71",
    low: "2798.77",
    volume: "0",
  },
};

/* BUT I need the following structure of data
[ { date: '2019-03-29', close: '2834.40' },
  { date: '2019-03-28', close: '2815.44' } ]
 */
var commentsSelector1 = (commentObj) => {
  return Object.keys(commentObj).map((i) => ({
    date: i,
    close: commentObj[i].close,
  }));
};

console.log(commentsSelector1(data));

//////////////////////////////////////////////////////////////////
const data = {
  bpi: {
    "2019-03-26": 3945.325,
    "2019-03-27": 4051.9033,
    "2019-03-28": 4039.0017,
    "2019-03-29": 4119.0183,
    "2019-03-30": 4117.8483,
  },
  disclaimer:
    "This data was produced from the CoinDesk Bitcoin Price Index. BPI value data returned as USD.",
  time: {
    updated: "Apr 26, 2019 00:03:00 UTC",
    updatedISO: "2019-04-26T00:03:00+00:00",
  },
};
//B> But I need the data (i.e. my state) in the below format
[
  { date: "2019-03-26", close: 3945.325 },
  { date: "2019-03-27", close: 4051.9033 },
  { date: "2019-03-28", close: 4039.0017 },
  { date: "2019-03-29", close: 4119.0183 },
  { date: "2019-03-30", close: 4117.8483 },
];

const stateData = Object.keys(data.bpi).map((item) => {
  return {
    date: item,
    close: data.bpi[item],
  };
});

console.log(stateData);

//////////////////////////////////////////////////////////////////////////

/* Problem - I have the data1 and data2, both arrays.
But from data1, I need only the _id field names in the below format which has a correponding 'name' field that matches data2's elements.
So in this example given data2 I need from data1 the following format
[ { _id: '5e38719e0a31f475afc236b7' },
  { _id: '5e39801f158ee52f86cede99' } ]
As these are the _id's which has a name field that matches the name field I have got from data2 array
Very important when mapping between multiple mongo data schemas.
 */

const data1 = [
  {
    _id: "5e39801f158ee52f86cede99",
    stopId: 4,
    name: "TTy",
    latitude: 20.123,
    longitude: 12.325,
  },
  {
    _id: "5e397c3e2291ca26fc13d507",
    stopId: 3,
    name: "test nagar",
    latitude: 10.1212,
    longitude: 11.1212,
  },
  {
    _id: "5e3871a80a31f475afc236b8",
    stopId: 2,
    name: "Stop - 22",
    latitude: 19.101978,
    longitude: 72.884701,
  },
  {
    _id: "5e38719e0a31f475afc236b7",
    stopId: 1,
    name: "Stop - 1",
    latitude: 19.101978,
    longitude: 72.884701,
  },
];

const data2 = ["Stop - 1", "TTy"];

const getArrOfObjectIds = (data1, data2) => {
  let newArr = [];
  data2.map((i) => {
    data1.map((j) => {
      if (i === j.name) {
        const item = { _id: j._id };
        newArr.push(item);
      }
    });
  });
  return newArr;
};

console.log(getArrOfObjectIds(data1, data2));
////////////////////////////////////////////////////////
// given an key-value pair object get the key with max value

let myObj = { 1: 2, 2: 1, 3: 2, 5: 3, 8: 1 };

// Case when I have multiple maximum value
let myObj2 = { 1: 3, 2: 1, 3: 2, 5: 3, 8: 1 };

// SOL-1
getMaxKey_1 = (obj) =>
  Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));

console.log(getMaxKey_1(myObj)); // => 5

console.log(getMaxKey_1(myObj2)); // => 5 // Does not give the first key with max value i.e. 1

// In case you have many equal values and not only one maximum:
// The below will return the first key with max value i.e. 1 for input object = { '1': 3, '2': 1, '3': 2, '5': 3, '8': 1 }
getMaxKey_3 = (obj) => {
  return Object.keys(obj).filter((i) => {
    return obj[i] === Math.max(...Object.values(obj));
  })[0];
};

console.log(getMaxKey_3(myObj));

console.log(getMaxKey_3(myObj2));

///////////////////////////////////////////////////////////
// Problems statement - from the below json, print only the products versions in an arry

var myData = {
  abc: [
    [{ prod_ver: "prod-1_ver 1" }, { prod_ver: "prod-1_ver 2" }],
    [{ prod_ver: "prod-2_ver 1" }, { prod_ver: "prod-2_ver 2" }],
    [{ prod_ver: "prod-3_ver 1" }, { prod_ver: "prod-3_ver 2" }],
  ],
};

printVersion = (myJSONObject) => {
  var versions = [];

  for (let i = 0; i < myJSONObject.abc.length; i++) {
    // assign variable for the current product
    let product = myJSONObject.abc[i];

    for (let j = 0; j < product.length; j++) {
      versions.push(product[j].prod_ver);
    }
  }
  return versions;
};

console.log(printVersion(myData));

///////////////////////////////////////////////////
// Option-1 - Getting key with the highest value from object
var elemHash = { 1: 2, 2: 1, 3: 2, 5: 3, 8: 1 };
return Object.keys(elemHash).reduce((a, b) =>
  elemHash[a] > elemHash[b] ? a : b
); // => 5
