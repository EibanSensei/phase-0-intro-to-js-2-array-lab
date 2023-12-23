// Write your solution here!

console.log('hi')

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const newCatsArray = [...cats, name];
    return newCatsArray;
}

function prependCat(name) {
    const secondNewCatsArray = [name, ...cats]
    return secondNewCatsArray
}

function removeLastCat() {
    return cats.slice(0,-1)
}

function removeFirstCat() {
    return cats.slice(1)
}