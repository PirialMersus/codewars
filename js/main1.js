// function alphabetPosition(text) {
//   let result = "";
//   let arr = text.toLowerCase().split("");

//   let filtered = arr.filter(
//     (currentValue) =>
//       currentValue.charCodeAt(0) > 96 && currentValue.charCodeAt(0) < 123
//   );

//   for (let i = 0; i < filtered.length; i++) {
//     if (i !== filtered.length - 1) {
//       let letterIndexByAscii = filtered[i].charCodeAt(0);
//       result += `${letterIndexByAscii - 96} `;
//     } else {
//       let letterIndexByAscii = filtered[i].charCodeAt(0);
//       result += `${letterIndexByAscii - 96}`;
//     }
//   }

//   return result;
// }

// Your task is to sort a given string. Each word in the string will contain a single number.
// This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will
// only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// function order(str) {
//   const wordsObject = {};
//   let answer = "";
//   const words = str.split(" ");
//   if (words.length === 0) return wordsObject;
//   for (let i = 0; i < words.length; i++) {
//     const splitNameArr = words[i].split("");
//     for (let j = 0; j < splitNameArr.length; j++) {
//       if (isNaN(splitNameArr[j]) === false) {
//         wordsObject[splitNameArr[j]] = words[i];
//       }
//     }
//   }
//   for (let i = 1; i <= Object.keys(wordsObject).length; i++) {
//     if (i === Object.keys(wordsObject).length) {
//       answer += wordsObject[i];
//     } else answer += `${wordsObject[i]} `;
//   }
//   return answer;
// }
// order("is2 Thi1s T4est 3a");

// let quantityX = 0,
//   quantityO = 0;
// let arr = str.toLowerCase().split("");
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].charCodeAt(0) === 111) {
//     quantityO++;
//   } else if (arr[i].charCodeAt(0) === 120) {
//     quantityX++;
//   }
// }

// if (quantityX === quantityO) {
//   return true;
// } else if (quantityX === 0 && quantityO === 0) {
//   return true;
// } else {
//   return false;
//
// function isPrime(num) {
//   //TODO
//   if (num < 2) {
//     return false;
//   }
//   for (let i = 2; i < num; i++) {
//     const divisionResult = num / i;
//     const simbolsAfterComma = (result) =>
//       result.toString().includes(".")
//         ? result.toString().split(".").pop().length
//         : 0;
//     if (simbolsAfterComma(divisionResult) === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function humanReadable(seconds) {
//   const countDigits = (n) => {
//     for (let i = 0; n > 1; i++) {
//       n /= 10;
//     }
//     return i;
//   };

// TODO
// let resultHours = 0,
//   resultMinutes = 0,
//   tempSeconds = seconds,
//   resultSeconds = 0;

// resultHours = seconds / 3600;
// if (resultHours > 99) {
//   return `99 59 59`;
// }

// if (resultHours >= 1) {
//   tempSeconds = seconds - resultHours * 3600;
// }

// resultMinutes = tempSeconds / 60;

// if (resultMinutes >= 1) {
//   tempSeconds = tempSeconds - resultMinutes * 60;
// }

// resultSeconds = tempSeconds;

// console.log(
//   "resultHours",
//   resultHours,
//   "resultMinutes",
//   resultMinutes,
//   "resultSeconds",
//   resultSeconds
// );
// if (seconds <= 60) {
//   if (countDigits(seconds) < 2) {
//     return `00 00 0${seconds}`;
//   } else {
//     return `00 00 ${seconds}`;
//   }
// }
// }
// humanReadable(58);
// console.log(humanReadable(5));
// const even_or_odd = (number) => {
//   if (number % 2 === 0) return "Even";
//   else return "Odd";
// };
// console.log(even_or_odd(676));
// console.log(even_or_odd(7));
// function positiveSum(arr) {
//   let sum = 0;
//   arr.forEach((el) => {
//     if (el > 0) {
//       sum += el;
//     }
//   });
//   return sum;
// }
// console.log(positiveSum([1, 2, 3, 4, 5]));
// function findShort(s) {
//   const worlds = s.split(" ");
//   let shortest = worlds[0].split("").length;
//   console.log(worlds);
//   console.log(shortest);
//   for (let index = 0; index < worlds.length; index++) {
//     const element = worlds[index];
//     if (element.split("").length < shortest) {
//       shortest = element.split("").length;
//     }
//   }
//   return shortest;
// }

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

// function solution(str) {
//   console.log(str.split("").reverse().join(""));
//   return str.split("").reverse().join("");
// }

// arr1 = [1, 2, 3, 4, 5];
// arr2 = [6, 7, 8, 9, 10];
// mergeArrays(arr1, arr2);

// function mergeArrays(arr1, arr2) {
//   let tempValue;
//   const arr3 = arr1
//     .concat(arr2)
//     .sort((a, b) => a - b)
//     .filter((item) => {
//       if (item !== tempValue) {
//         tempValue = item;
//         return true;
//       } else {
//         tempValue = item;
//         return false;
//       }
//     });
//   console.log(arr3);
//   return arr3;
// }
// function getCount(str) {
//   let vowelsCount = 0;
//   const arr = str.split("");
//   for (let i = 0; i <= arr.length; i++) {
//     if (
//       arr[i] === "a" ||
//       arr[i] === "e" ||
//       arr[i] === "i" ||
//       arr[i] === "o" ||
//       arr[i] === "u"
//     ) {
//       vowelsCount++;
//     }
//   }
//   console.log(vowelsCount);
//   // enter your majic here

//   return vowelsCount;
// }
// getCount("abracadabra");
// const numbers = [21, 0, 12, 1, 3];

// const sum = numbers.reduce((acc, el) => acc + el);

// console.log(sum);
// function dirReduc(arr) {
//   let reuslt = [];

//   let arrCopy = [...arr];
//   let itemsNumbers = [];
//   let flag = true;
//   const compareFunction = (a, b) => {
//     switch (a) {
//       case "WEST":
//         if (b === "EAST") {
//           return true;
//         }
//       case "EAST":
//         if (b === "WEST") {
//           return true;
//         }
//       case "NORTH":
//         if (b === "SOUTH") {
//           return true;
//         }
//       case "SOUTH":
//         if (b === "NORTH") {
//           return true;
//         }
//       default:
//         return false;
//     }
//   };

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1]) {
//       if (flag) {
//         if (compareFunction(arr[i], arr[i + 1])) {
//           itemsNumbers = [...itemsNumbers, i, i + 1];
//           flag = false;
//         }
//       } else {
//         flag = true;
//       }
//     }
//   }

//   if (itemsNumbers.length > 0) {
//     for (let i = itemsNumbers.length - 1; i >= 0; i--) {
//       arrCopy.splice(itemsNumbers[i], 1);
//     }
//     console.log({ arrCopy }, "first branch", { itemsNumbers });
//     dirReduc(arrCopy);
//   } else {
//     console.log("second branch finish", arrCopy);
//     result = arrCopy;
//   }

//   // return 10;

// console.log(
//   dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
// );