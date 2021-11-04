function sayHello(name) {
    return ("Hello, " + name);
}

function standardizeInput(collection) {
    return(collection instanceof Array) ? collection.slice(): Object.values(collection)
}

function myEach(collection, callback) {
    const newCollection = standardizeInput(collection);

    for(let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);
    }
    
    return collection;
}

function myMap(collection, callback) {
    const newCollection = standardizeInput(collection);

    const returnCollection = [];

    for(let i = 0; i < newCollection.length; i++) {
        returnCollection.push(callback(newCollection[i]));
    }

    return returnCollection;
}

function myReduce(collection, callback, acc) {
    const newCollection = standardizeInput(collection);
    let startingPosition = 0;

    if(acc === undefined) {
        acc = newCollection[0];
        startingPosition = 1;
    }

    console.log(acc);

    for(let i = startingPosition; i< newCollection.length; i++) {
        acc = callback(acc, newCollection[i], newCollection);
    }

    return acc;
}

function myFind(collection, predicate) {
    for(let i = 0; i < collection[i]; i++) {
        if(predicate(collection[i]) === true) {
            return collection[i];
        }
    }

    return undefined;
}
