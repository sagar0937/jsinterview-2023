//https://gist.github.com/argodeep/4c508be6f02ef55942df9ce6926efb9d
var name1 = {
  first: "abc",
  last: "pqr",
};

var printName = function (city, state) {
  console.log(`${this.first} ${this.last} is from  ${city} ${state}`);
};

//bind version1
Function.prototype.mybind = function (...args) {
  let obj = this; //points to printName-->printName.bind(name)
  let params = args.slice(1); // printName.mybind(name1,'dehradun')//when der is more paramters
  return function (...args2) {
    //pun,maha
    obj.apply(args[0], [...params, ...args2]);
  };
};

//bind version 2
Function.prototype.mybind = function (currentContext = {}, ...arg) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it's not callable");
  }
  currentContext.fn = this;
  return function () {
    return currentContext.fn(...arg);
  };
};

//call 1 version
Function.prototype.mycall = function (...args) {
  let obj = this;
  let params = args.slice(1);
  obj.apply(args[0], [...params]);
};

//call 2 version
Function.prototype.myCall = function (currentContext = {}, ...arg) {
  if (typeof this !== "function") {
    throw new Error(this + "it's not callable");
  }
  currentContext.fn = this;
  currentContext.fn(...arg);
};

//apply  2 version
Function.prototype.myApply = function (currentContext = {}, arg = []) {
  if (typeof this !== "function") {
    throw new Error(this + "it's not callable");
  }
  if (!Array.isArray(arg)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }
  currentContext.fn = this;
  currentContext.fn(...arg);
};

//apply  1 version
var name1 = {
  first: "abc",
  last: "pqr",
};

var printName = function (state) {
  console.log(this.first + " " + this.last + " " + state);
};
Function.prototype.myApply = function (...args) {
  debugger;

  let obj = this;
  let params = args.slice(1);
  obj.apply(args[0], [...params]);
};

printName.myApply(name1, ["maha"]);

//bind
var print = printName.bind(name1);
print("pune", "maha");
var print = printName.mybind(name1);
print("mum", "maha");

//call
printName.myCall(name1, "pune", "maha");

//apply
printName.myCall(name1, "pune", "maha");

//*************************************************************************************** */

//foreach
var logicAlbums = [
  "Bobby Tarantino",
  "The Incredible True Story",
  "Supermarket",
  "Under Pressure",
];

Array.prototype.myforEach = function (callback) {
  // callback here is the callback function
  // which actual .forEach() function accepts
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this); // currentValue, index, array
  }
};

logicAlbums.myforEach(function (word) {
  console.log(word);
  // Bobby Tarantino,
  // The Incredible True Story,
  // Supermarket,
  // Under Pressure;
});

//////////////////////////////////// https://www.youtube.com/watch?v=Oik9PaWoZVg
//map
Array.prototype.ourMap = function (callback) {
  var arr = []; // since, we need to return an array
  for (var i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this)); // pushing currentValue, index, array
  }
  return arr; // finally returning the array
};
const mapThoseAlbums = logicAlbums.ourMap(function (album) {
  return album;
});

console.log(mapThoseAlbums);

////////////////////////////////////
//filter
var arr = [2, 5, 6, 10, 15];
Array.prototype.myfilter = function (callback, context) {
  arr = [];
  for (var i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};
  var result = arr.myfilter((a) => {
    return a >= 10;
  });
  console.log(result);

////////////////////////////////////
//find

var arr = [2, 5, 6, 10, 15];
Array.prototype.myfind = function (callback, context) {
  for (var i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      return this[i];
    }
  }
};
var result = arr.myfind((a) => {
  return a >= 10;
});
console.log(result);

////////////////////////////////////
//reduce https://www.youtube.com/watch?v=Oik9PaWoZVg
var arr = [2, 5, 6, 10, 15];
Array.prototype.myReduce = function (callback, intialValue) {
  let accumalator = intialValue || 0;
  for (var i = 0; i < this.length; i++) {
    accumalator = callback(accumalator, this[i], i, this);
  }
  return accumalator;
};

var result = arr.myReduce((acc, cur) => {
  return acc + cur;
});
console.log(result);

//example
let realEstate = [
  {
    id: "3c5f4c26-f048-11e9-81b4-2a2ae2dbcce4",
    name: "Vancouver Luxury Apartments",
    price: 450000,
  },
  {
    id: "3c5f4e9c-f048-11e9-81b4-2a2ae2dbcce4",
    name: "Calgary Housing",
    price: 330000,
  },
  {
    id: "3c5f52d4-f048-11e9-81b4-2a2ae2dbcce4",
    name: "AGM Apartments",
    price: 300000,
  },
];

function reducer(acc, cur) {
  return { ...acc, [cur.id]: cur };
}

let newRealEstate = realEstate.reduce(reducer, {});
console.log(newRealEstate);
