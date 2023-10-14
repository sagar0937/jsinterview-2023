
//interview programs
function reverseInt(int){
    console.log((parseInt(int.toString().split('').reverse().join('')))*Math.sign(int))
  }
  reverseInt(-13);
  reverseInt(-500);

//reverse string
  function reverseString(str){
    console.log(str.split('').reverse().join(''));
  }
  reverseString('hello');

  //without inbuild function
  function reverseString(str){
      let reverseStr = ''
    for(let a of str){
        reverseStr = a+reverseStr;
    }
    return reverseStr;
  }
  reverseString('hello');

  //palindrome
  function palindrome(str){
    let reverseStr =  str.split('').reverse().join('');
    if(reverseStr===str) {
        return true
    }else{
        return false
    }
}
console.log(palindrome('madam'));
console.log(palindrome('cff'));

//captialize first Letter
function captialize(str){
    return (str.toLowerCase().split(' ').map((word)=>word[0].toUpperCase()+word.slice(1))).join(' ');
   
 }
 console.log(captialize('i lOve Javascript'));

 //fizzbuzz
 function fizzbuzz() {
    for (let i = 0; i <= 50; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
      } else if (i % 3 === 0) {
        console.log('fizz')
      } else if (i % 5 === 0) {
        console.log('buzz')
      } else {
        console.log('no', i)
      }
    }
 
 
 
  }
  fizzbuzz();

  //maxCharacter ---//javascript;
  function maxCharacter(str) {
    let charobj = {};
    let max = 0,charM=''
 
    for (let s of str) {
      charobj[s] = charobj[s] ? ++charobj[s] : 1;
    }
    for (let char in charobj) {
     if(charobj[char]>max){
     max=charobj[char];
     charM=char;
     }
    }
    return charM;
 
  }
  console.log(maxCharacter('javascript'));
  console.log(maxCharacter('javavvvvvscript'));

  //longest word
  function longestWord(sen) {
    // Create filtered array
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  
    // Sort by length
    const sorted = wordArr.sort((a, b) => b.length - a.length);
  
    // If multiple words, put into array
    const longestWordArr = sorted.filter(
      word => word.length === sorted[0].length
    );
  
    // Check if more than one array val
    if (longestWordArr.length === 1) {
      // Return the word
      return longestWordArr[0];
    } else {
      return longestWordArr;
    }
  }
 longestWord('Hello, my name is Brad') === 'hello'
 longestWord('Hello there, my name is Brad') === ['hello', 'there']

//array chunk
 function chunkArray(arr, size) {
    let chunk = [],
      i = 0;
    while (i < arr.length) {
      
      chunk.push(arr.slice(i, i + size))
      i = i + size
    }
    return chunk;
  }

  //splice
  var chunks = function(array, size) {
    var results = [];
    while (array.length) {
      results.push(array.splice(0, size));
    }
    return results;
  };
  chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);

  //flattern nested array
  function flatten(ary) {
    return ary.reduce(function(a, b) {
      if (Array.isArray(b)) {
        return a.concat(flatten(b))
      }
      return a.concat(b)
    }, [])
  }

  //reduce es6 flattern
  const flatten = (ary) => ary.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])
    console.log(flatten)
  flatten([1, [2, [3], 4, [5, 6, [7]]]])

