// javascript coding round
/*

function z() {
  var b = 900;
  function x() {
    var a = 15;
    function y() {
      console.log(a, b);
    }
    a = 100;
    y();
  }
  x();
}
z();
*/

// the output 100 900
// calling z() will go inside and run line by line 1st it'll find
// console to print out the values it will see for a and the a is  getting updated once y will get called before that a has gotupdated so the o/p is 100 900 if we put y() before a is getting assigned then it'll give 15, 900.

// without closure fn it will return 6 6 6 6 6 6 we can fix this
// by using either let or closure fn. with var it reuns the
//settimeOut and reach at the end & print 6 six times all points at the same memory location
// incase of closure fn & let it will keep the values at different memory location & print 1 2 3 4 5
/*
function a() {
  for (var i = 1; i <= 5; i++) {
    function closerExample(x) {
      setTimeout(() => {
        console.log(x);
      }, i * 1000);
    }
    closerExample(i);
  }
}
a();
*/

// here we are accessing the outer variable inside a function
// it forms a closure.
/*
function ConstCloser() {
  var counter = 0;
  this.incrementFunction = function () {
    counter++;
    console.log(counter);
  };
  this.decrementFunction = function () {
    counter--;
    console.log(counter);
  };
}
var ccIncDec = new ConstCloser(5);

ccIncDec.incrementFunction();
ccIncDec.incrementFunction();
ccIncDec.incrementFunction();
ccIncDec.decrementFunction();
*/

// Find the char count of "a" in a given string
// input = whatisyournamea;

/*
let charCount = 0;
function charCountFn(char) {
  for (let i = 0; i < char.length; i++) {
    if (char[i] === 'a') charCount++;
  }
}

let res = charCountFn('whatisyournamea');
console.log('char Count in given string is', charCount);
*/

// 6. What is deep copy and shallow copy
/*
const a = {
  en: 'Hello',
  de: 'Hallo',
  es: 'Hola',
  pt: 'Olà',
};

let b = a;
b.pt = 'Oi';
console.log(b);
console.log(a);
*/

/*
  In the example above, we actually made a shallow copy. This is often times problematic. since we expect the old variable
  to have the original values, not the changed ones.
*/

/*
Spread operator.
There are multiple ways to make copies of objects,
espeially with ...(spread operator)

Introduced with ES2015, this operator is just great, because it is so short and simple. It ‘spreads’ out all of the values into a new object. You can use it as follows:
*/
/*
const a = {
  en: 'Bye',
  de: 'Tschüss',
};

let b = { ...a };
b.de = 'Ciao';
*/

// console.log('copied=>', b, 'original=>', a);

/*
  here it made a copy and changed the prop^ in copied one but the
  original didn't get change. ==> deep copy
*/

// we can also merge these 2 objects using spread operator
/*
  const obj1 = {
    name: 'Ashwani',
  };
  const obj2 = {
    lastName: 'kumar',
  };

  const obj3 = { ...obj1, ...obj2 };
  console.log(obj3);
*/

/*
  Object.assign
  This was mostly used before the spread operator was around,
  and it basically does the same thing.
*/

/*
const a = {
  en: 'Bye',
  de: 'Tschüss',
};

let b = Object.assign({}, a);
b.de = 'Ciao';

console.log('copied=>', b, 'original=>', a);
*/

/*
  here it made a copy and changed the prop^ in copied one but the
  original didn't get change.
*/
/*
  Till this point it is okay bt the problem starts when
  we have nested obj let's see the example.
*/

/*
const a = {
  dinner: {
    dinnerTime: '7 o clock',
  },
};

const b = { ...a };
b.dinner.dinnerTime = '10 o clock';

console.log('copied & modified', b);
console.log('original', a);
*/

/*
  here we see the problem is in nested object original object
  property is also getting changed.
*/

/**There are 2 way to solve this issue */

/* 
1. To make a deep copy of nested objects, you would have to consider that.
   One way to prevent that is manually copying all nested objects:
*/
/*
const a = {
  dinner: {
    dinnerTime: '7 o clock',
  },
};

const b = { ...a.dinner };
b.dinnerTime = '10 o clock';

console.log('copied & modified', b);
console.log('original', a);
*/
/* 
  here we can see that when we change the obj props^ from original then the 
  b obj get changed but not the original one here is also an issue what if we want the whole object then we won't be able to bcz this is only limited to take obj which has not the nested property.
*/

/*
Making deep copies without thinking
What if you don’t know how deep the nested structures are? It can be very tedious to manually go through big objects and copy every nested object by hand. There is a way to copy everything without thinking. You simply stringify your object and parse it right after:
*/

/*
  const a = {
    dinner: {
      dinnerTime: '7 o clock',
    },
  };

  const b = JSON.parse(JSON.stringify(a));
  b.dinner.dinnerTime = '10 0 clock';

  console.log('copied & modified',b);
  console.log('original',a);
*/

// Bonus:- Let's see with the classes

/*
class Counter {
  constructor() {
    this.count = 5;
  }

  copy() {
    const copy = new Counter();
    copy.count = this.count;
    return copy;
  }
}

const originalCounter = new Counter();
const copiedCounter = originalCounter.copy();
console.log('copied', copiedCounter, 'original', originalCounter);
//right now the copied & original counter has the same values
// let's change the copiedCounter count
// o/p => copied> Counter{count: 5} original> Counter{count: 5}
copiedCounter.count = 7;
console.log('copied', copiedCounter, 'original', originalCounter);
// o/p => copied> Counter{count: 7} original> Counter{count: 5}
*/

// remove duplicates from array.
// using forEach
/*
const arr = [3, 3, 4, 4, 5, 5, 12, 9, 11];
const uniqueArr = [];
arr.forEach((item, id) => {
  if (arr.indexOf(item) === id) {
    uniqueArr.push(item);
  }
});
console.log(uniqueArr);
*/

// using filters
/*
const arr = [3, 3, 4, 4, 5, 5, 12, 9, 11];
const newArr = arr.filter((item, id) => arr.indexOf(item) === id);
console.log(newArr);
*/

// using for loop
/*
const arr = [3, 3, 4, 4, 5, 5, 12, 9, 11];
const uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
  if (uniqueArr.indexOf(arr[i]) === -1) {
    uniqueArr.push(arr[i]);
  }
}
console.log(uniqueArr);
*/

// find the lenght of each word.
/*
  const input = 'how are you today';
  const wordCount = input.split(' ').map((item) => `${item}: ${item.length}`);
  console.log(wordCount);
*/
// Find the length of type of each element in the array.
/*
let input = [
  function () {},
  new Object(),
  [],
  {},
  NaN,
  Infinity,
  undefined,
  null,
  0,
];

let count = {};
input.map((item) => (count[typeof item] = (count[typeof item] || 0) + 1));
console.log(count);
*/

// find the counts of the element repeted inside an array

const input = ['a', 'b', 'c', 'c', 'c', 'b'];

// using function
/*
function repetedElementInsideArray(items) {
  let count = {};
  items.forEach((item) => {
    count[item] = (count[item] || 0) + 1;
  });
  return count;
}

let result = repetedElementInsideArray(input);
console.log(result);
*/

// this can be simply done by map in one line.
/*
  count = {};
  input.map((item) => (count[item] = (count[item] || 0) + 1));
  console.log(count);
*/

// convert this nexted object to flat object.
/*
let user = {
  name: 'John',
  address: {
    personal: {
      city: 'London',
      area: 'UK',
    },
    office: {
      city: 'AmsterDam',
      area: {
        landmark: 'NeetherLands',
        place: {
          continent: 'Europe',
        },
      },
    },
  },
};
*/
// using function this can make a flat object now matter how long object is nested.
/*
let finalObj = {};

let convertToSingleObject = (user) => {
  for (let key in user) {
    if (typeof user[key] === 'object') {
      convertToSingleObject(user[key]);
    } else {
      finalObj[key] = user[key];
    }
  }
};
convertToSingleObject(user);
*/
/*
function foo() {
  let a = b = 0;
  a++;
  return a;
}

foo();

console.log(typeof a); // undefined
console.log(typeof b); // number
*/

/*
const clothes = ['jacket', 't-shirt'];
clothes.length = 0;

console.log(clothes[0]); // undefined
*/
/*
const length = 4;
const numbers = [];
for (var i = 0; i < length; i++);
{
  numbers.push(i + 1);
}
console.log(numbers);
*/

// the o/p will be 5 bcx of ; if you see clearly.

// find whether the given string is pelindrome or not

/*
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  let left = 0;
  let right = cleanStr.length - 1;

  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Example usage
const testString1 = "level";
const testString2 = "levels";

console.log(isPalindrome(testString1));  // Output: true
console.log(isPalindrome(testString2));  // Output: false
*/
// find the maximum occurance of elements in the array.
/*
function findMaxOccurrence(arr) {
  if (arr.length === 0) return null;

  const elementCount = {};

  for (const element of arr) {
    elementCount[element] = (elementCount[element] || 0) + 1;
  }

  let maxElement,
    maxCount = 0;

  for (const element in elementCount) {
    if (elementCount[element] > maxCount) {
      maxCount = elementCount[element];
      maxElement = element;
    }
  }
  return {
    element: maxElement,
    count: maxCount,
  };
}


const arr = [2, 3, 1, 2, 2, 3, 4, 2]; // Example array.
const result = findMaxOccurrence(arr);

console.log('The element with the maximum occurrence is:', result.element);
console.log('Maximum occurrence count:', result.count);
*/

// rotate the array
/*
function rotateRight(arr) {
  console.log(arr.slice(arr.length - 2).concat(arr.slice(0, arr.length - 2)));
}

const arr = [1, 2, 3, 4, 5, 6, 7];
// Rotate 2 positions to the right

const rotatedArray = rotateRight(arr);
*/

// Find the maximum elements in the array & find the second largest element in the array.
/*
const input = [3, 2, 5, 6, 32, 14, 16, [45, 23]];

function findMax(input) {
  let max = 0;
  let secondMax = 0;
  for (let i = 0; i < input.length; i++) {
    if (max < input[i]) {
      max = input[i];
    } else if (secondMax < max) {
      secondMax = input[i];
    }
  }
  return {
    max,
    secondMax,
  };
}

let res = findMax(input.flat());
console.log(res);
*/

// find the missing number in the series..
/*
const series = [-3, 3, 6, 9, 15, 18, 24];

function missingNumInSeries() {
  let missingseriesArr = [];
  let commonDiff = {};
  let cdVaue,
    maxCount = 0;
  // finding common difference
  for (let i = 0; i < series.length - 1; i++) {
    let cd = series[i + 1] - series[i];
    cd = commonDiff[cd] = (commonDiff[cd] || 0) + 1;
  }

  // finding maximum occurene and finalizing common difference
  for (let key in commonDiff) {
    if (maxCount < commonDiff[key]) {
      maxCount = commonDiff[key];
      cdVaue = key;
    }
  }

  // checking the element where the cd is not same then we are adding
  // the just previous object to the common difference.
  for (let i = 0; i < series.length - 1; i++) {
    if (series[i + 1] - series[i] != cdVaue) {
      missingseriesArr.push(series[i] + parseInt(cdVaue));
    }
  }
  return missingseriesArr;
}

let res = missingNumInSeries(series);
console.log(res);
*/

// Freezing An Object: Object.freeze()
/**
 * Once we freeze the object we can't add or modify the properties to it.
 */
/*
  const user1 = {
    age: 26,
    mobile: 1993,
    name: 'Talha',
  };
  Object.freeze(user1);
  user1.name = 'Abu';
  user1.class = 'senior';
  console.log(user1);
*/

// Sealing an Object : Object.seal()
/**
 * it can modify the properties but it can't add or delete the new        properties to it.
 */

/*
    const user1 = {
      mobile: 1993,
      name: 'Talha',
    };
    Object.seal(user1);
    user1.name = 'ABU';
    console.log(user1.name);  //"ABU"
    user1.age = 26;
    console.log(user1.age);   // undefined.

*/
/*
var b = 1;
function outer() {
  var b = 2;
  function inner() {
    b++;
    console.log(b); // NAN
    var b = 5;
    console.log(b); // 5
  }
  inner();
}
outer();
*/

// the above expression will return [undefined, undefined, 1]

/*
var b = [undefined];
b[2] = 1;
console.log(b);
*/
//  what if i put a[10]=25 will that crash, let's see that
/*
let a = [1, 2, 3];

a[8] = 25;

console.log(a);
*/
// the result will be [1,2,3,undefined, undefined, undefined, undefined, undefined, 25] bcz js will assign 1,2,3 and the emty space with undefined till index 7 & then it'll put 25 at the 8th index.
