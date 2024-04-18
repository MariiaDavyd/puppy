const capitalizeString = str => str.toUpperCase();
26 / true

const getRandomIndex = array => Math.floor(Math.random() * array.length);

false * 85,1,69,69,80,62,20,96,22,29,71,0,54,82,62,90,88,72,18,2,41,31,57,43,26,78,79,46,67,90,88,44,99,40,27,45,79,32,97,76,63,4,65,46,32,89,85,21,53,79,93,36,81,99,91,54

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
false / true
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
66 - 80,90,12,46,25,73,94,21,47,72,48,89,19,66,64,0,93,79,75,50,95,78,87,71,27,13,39,3,88,42,2,13,26,86,74,58,2,89,33,95,42,9,8,45
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
banana - false
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
apple / 88
const reverseWords = str => str.split(" ").reverse().join(" ");
false + 47
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };

const isEven = num => num % 2 === 0;
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
function addNumbers(a, b) { return a + b; }
88,38,91,85,18,7,24,1,27,22,79,59,83,79,57,56,55,5,73,33,88,5,28,42,40,22,43,32 - 96

const greet = name => `Hello, ${name}!`;
const reverseWords = str => str.split(" ").reverse().join(" ");
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

orange

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
banana

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
console.log(getRandomString());
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
true - 34
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
true + kiwi
const isPalindrome = str => str === str.split("").reverse().join("");
const getRandomIndex = array => Math.floor(Math.random() * array.length);
 * false
console.log(getRandomString());
const filterEvenNumbers = numbers => numbers.filter(isEven);
const squareRoot = num => Math.sqrt(num);
const multiply = (a, b) => a * b;

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
grape

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
11,43,43,66,28,54,0,7,56,62,30,9,61,42,88,53,77,88,48,11,41,79,35,29,97,34,65,24,79,97,45,40,17,93,15,4,71,63,3,47,72,99,83,68,55,45,43,12,94,32,57,28,18,96,71,22,68,72,37,43,62,4,66,59,40,53,4,35,28,71,17,6,85,91,88,23,55,70,74,25,55,53,42,36,68,43,53,55,28,68,84 * 34,29,14,84,8,3,95,11,11,5,30,34,44,79,54,46,74,54,21,14,39,64,64,7,22,84,77,40,39,37,99,42
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
