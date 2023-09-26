// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  // Use a destructive method to add 'name' to the 'cats' array
  cats.push(name);
}

function destructivelyPrependCat(name) {
  // Use a destructive method to add 'name' to the beginning of the 'cats' array
  cats.unshift(name);
}

// Implement the remaining functions here

function destructivelyRemoveLastCat() {
  // Use a destructive method to remove the last cat from the 'cats' array
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  // Use a destructive method to remove the first cat from the 'cats' array
  cats.shift();
}

function appendCat(name) {
  // Use a non-destructive method to return a new array with 'name' appended
  const newArray = [...cats, name];
  return newArray;
}

function prependCat(name) {
  // Use a non-destructive method to return a new array with 'name' prepended
  const newArray = [name, ...cats];
  return newArray;
}

function removeLastCat() {
  // Use a non-destructive method to return a new array with the last cat removed
  const newArray = cats.slice(0, -1);
  return newArray;
}

function removeFirstCat() {
  // Use a non-destructive method to return a new array with the first cat removed
  const newArray = cats.slice(1);
  return newArray;
}

module.exports = {
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat,
};

