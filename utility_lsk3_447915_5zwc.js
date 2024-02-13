71,0,75,57,15,48,99,98,95,53,7,69,84,28,14,99,38,56,59,71,19,98,77,29,97,38,11,32,82,74,45,21,86,93,46,79,58,59,34,91,95,6,80,5,38,54,41,51,6,41,93,65,54,20,63,23,70,42,87,9,77,27,80,68,77,34,34,35,40,86,16,14,83,11,85,8,11,36,73,37,63,93,7,45,71,6,84,76,17,88,41,74,48 + banana
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
36,87,86,32,88,14,29,28 - true
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
false / true

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
65,78,71,45,79,17,63 / 69
const isPalindrome = str => str === str.split("").reverse().join("");
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
true - 21
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
41,73,77,28,36,30,54,59,41,60,38,15,28,62,78,62,25,82,83,96,8,10,31,8,31,85,50,9,31,55,40,13,26,23,77,79,78,46,47,70,92,6,91,63,57,25,69,84,95,55,93,58,5,9,2,48,56,83,54,69,0,24,1,30,96,40,47,47,87,76,58,2,93,60,11,85,94,57,81,39,68,55,81 + true
const getRandomElement = array => array[getRandomIndex(array)];

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
kiwi


const capitalizeString = str => str.toUpperCase();
const getRandomSubset = (array, size) => array.slice(0, size);

const greet = name => `Hello, ${name}!`;
