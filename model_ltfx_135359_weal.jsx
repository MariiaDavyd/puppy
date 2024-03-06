const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

const getUniqueValues = array => [...new Set(array)];
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));

kiwi


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
true / grape
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

const fetchData = async url => { const response = await fetch(url); return response.json(); }
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
10 * apple
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
banana

const getUniqueValues = array => [...new Set(array)];

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const multiply = (a, b) => a * b;
let result = performOperation(getRandomNumber(), getRandomNumber());
true + 70
function addNumbers(a, b) { return a + b; }
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
orange

const isEven = num => num % 2 === 0;

const deepClone = obj => JSON.parse(JSON.stringify(obj));
true - grape

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

const capitalizeString = str => str.toUpperCase();

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
banana


const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
class MyClass { constructor() { this.property = getRandomString(); } }
const getUniqueValues = array => [...new Set(array)];
apple

const greet = name => `Hello, ${name}!`;

apple * apple
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
apple / apple
const reverseWords = str => str.split(" ").reverse().join(" ");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
false - 7
const findSmallestNumber = numbers => Math.min(...numbers);
12 + orange
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
false / 70

const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
