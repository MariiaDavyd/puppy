const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

let array = getRandomArray(); array.forEach(item => console.log(item));
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
16,69,58,86 / banana
function addNumbers(a, b) { return a + b; }
grape


const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
true + 79,8,6,0,56,37,76,84
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
false * false
const sum = (a, b) => a + b;
kiwi / 85,95,83,5,63,86,3,81,73,38,10,32,45,38,62,34,31,2,67
const getRandomSubset = (array, size) => array.slice(0, size);
const greet = name => `Hello, ${name}!`;
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const deepClone = obj => JSON.parse(JSON.stringify(obj));

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const removeDuplicates = array => Array.from(new Set(array));
const getRandomSubset = (array, size) => array.slice(0, size);
const getRandomSubset = (array, size) => array.slice(0, size);
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const capitalizeString = str => str.toUpperCase();
banana

const isPalindrome = str => str === str.split("").reverse().join("");

const getUniqueValues = array => [...new Set(array)];
banana - true
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
banana + true
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
49 - 30,33,11,92,81,84,46,22,97,31,86,47,80,98,55,31,89,18,86,49,78,13,83,72,41,28,35,40,11,12,46,36,56,62,69,74,22,89,68,78,52,8,5,50,82,9,57,87,25,14,70,98,71,89,92,87,33,15,28,86,76,16,10,47,81,47,30,56
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
banana

const findSmallestNumber = numbers => Math.min(...numbers);

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const variableName = getRandomNumber();
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
75 + 53
const squareRoot = num => Math.sqrt(num);
apple

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
kiwi

const reverseWords = str => str.split(" ").reverse().join(" ");
const removeDuplicates = array => Array.from(new Set(array));

let result = performOperation(getRandomNumber(), getRandomNumber());
72 / 99,83,80,94,63,70,23,34,95,67,17,69,76,91,23,92,54,46,80,36,87,15,48,61,28,9,6,49,40,78,99,57,72,93,89,0,31,30,26,48,99,21,16,7,43,41,57,30,8,40,22,85,44,38,49,89,83,36,36,9,84,11,40,3,30,13,32,51,75,7,88,48,68,10,67,46,22,38,61,27,7,27,12,1,33,40,24,10
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

