//console.log("Hello-World"); Sanity Test
// Ex 1. Text Manipulation and Arrays
const exercise1 = (phrase) => {
    console.log('Exercise 1');
    // normalize input using toLowerCase(), then split into array at every space in string
    const modified = phrase.toLowerCase().split(' ');
    for (let i = 1; i < modified.length; i += 2) {
        // for every other word in array, transform to uppercase and assign it to corresponding index
        modified[i] = modified[i].toUpperCase();
    }
    // join modified array with spaces
    const result = modified.join(' ');
    console.log(result);
    return result;
}

// Ex 2. Text Manipulation and Arrays
const exercise2 = (word) => {
    console.log('Exercise 2');
    // if word is all lowercase, return it in all caps
    if (word === word.toLowerCase()) {
        console.log(word.toUpperCase());
        return word.toUpperCase();
    }
    //if word is all caps, return it in all lowercase
    if (word === word.toUpperCase()) {
        console.log(word.toLowerCase());
        return word.toLowerCase();
    }
    // for when word isn't all caps or all lowercase
    console.log(`Input wasn't in all uppercase or all lowercase. ${word}`);
    return `Input wasn't in all uppercase or all lowercase. ${word}`
}

// Ex 3a. Return first n number of elements
const first = (arr, num) => {
    console.log(arr.slice(0, num));
    return arr.slice(0, num);
}
// Ex 3b. Return last n number of elements
const last = (arr, num) => {
    console.log(arr.slice(-num));
    return arr.slice(-num);
}

const exercise3 = () => {
    console.log('Exercise 3');
    first([2, 3, 9, 7, 4, 5], 4);
    last([2, 3, 9, 7, 4, 5], 3);
}

// Ex 4. Remove element with specific value from array
const exercise4 = (arr, unwanted) => {
    console.log('Exercise 4');
    // filter out all instances of unwanted value from arr; reassign result to arr
    arr = arr.filter((item) => item !== unwanted);
    console.log(arr);
    return arr;
}

// Ex 5. Pet List
const exercise5 = () => {
    console.log('Exercise 5');
    const pet_list = [];

    const pet1 = {
        type: 'dog',
        age: 7,
        color: 'brown'
    }

    const pet2 = {
        type: 'bird',
        age: 3,
        color: 'green'
    }

    const pet3 = {
        type: 'walrus',
        age: 5,
        color: 'gray'
    }

    pet_list.push(pet1, pet2, pet3);

    for (const pet of pet_list) {
        console.log(`Type of pet: ${pet.type}`)
        console.log(`Age of pet: ${pet.age}`)
        console.log(`Color of pet: ${pet.color}`)
        console.log("=============================");
    }
}

const main = () => {
    exercise1('As A Man Thinketh In His Heart, So Shall Be');
    exercise2('allderdice');
    exercise3();
    exercise4([2, 8, 4, 6, 4, 9, 2], 4);
    exercise5();
}

main();
