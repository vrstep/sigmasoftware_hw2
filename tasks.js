// Task 1

function swapThreeDigit(n) {
    let result;
    if (n > 99 && n < 1000) {
        let lastDigit = n % 10;

        let secondDigit = n % 100 / 10;
        secondDigit = Math.floor(secondDigit);

        let firstDigit = n % 1000 / 100;
        firstDigit = Math.floor(firstDigit);

        result = secondDigit * 100 + firstDigit * 10 + lastDigit; 
    } else return "Please input only three digit numbers"
    return result;
}

// console.log(swapThreeDigit(562));
// console.log(swapThreeDigit(123));
// console.log(swapThreeDigit(879));
// console.log(swapThreeDigit(49));

// Task 2

let A = 40;
let B = 99;

if (A != B) {
    let temp = A + B;
    A = temp;
    B = temp;
} else if (A == B) {
    A = 0;
    B = 0;
}

// console.log(A, B);

// Task 3 

function whatYear(year) {
    let result;
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        result = `В ${year} году 366 дней`;
    } else result = `В ${year} году 365 дней`;
    return result;
}

// console.log(whatYear(2023));

// Task 4

function squareNumber(n) {
    let result = 0;
    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            result += 2 * i - 1;
        }
    } else return "Input number greater than 0";
    return result;
}

// console.log(squareNumber(7));

// Task 5

function sum(n, k) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result += i ** k;
    }
    return result
}

// console.log(sum(5, 4));

// Task 6

let array = [2, 54, 33, 632, 23, 1, 9, 11, 55, 100];

let minElement = array[2];

for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0 && i != 0) {
        if (minElement > array[i]) {
            minElement = array[i];
        }
    }
}
// console.log(minElement)

// Task 7

array = [2, 54, 33, 632, 23, 1, 9, 11, 55, 100];

let maxSumPair = array[0] + array[1];

let firstElement = 0;
let secondElement = 0;

for (let i = 0; i < array.length; i++) {
    if (maxSumPair < array[i] + array[i + 1]) {
        maxSumPair = array[i] + array[i + 1];
        firstElement = array[i];
        secondElement = array[i + 1];
    }
}

// console.log(firstElement, secondElement);

// Task 8

array = [2, 54, 33, 632, 23, 1, 9, 11, 55, 100];

function moveRight(array) {
    let lastElement = array.pop();
    array.unshift(lastElement);
    return array;
}

// console.log(moveRight(array));

// Task 9

array = [30, 8, 10, 14, 22, 24, 45, 49, 50];

function rightOrderedArray(array) {
    let firstElement = array.shift();
    for (let i = 0; i < array.length; i++) {
        if (firstElement < array[i + 1] && firstElement > array[i - 1]) {
            array.splice(i, 0, firstElement);
        }
    }
    return array;
}

// console.log(rightOrderedArray(array));

// Task 10

array = [30, -8, 10, 14, -22, 24, 45, -49, 50]

function zeroBeforePositive(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        // newArray.push(array[i]);
        if (array[i] > 0) {
            newArray.push(0);
            newArray.push(array[i]);
        } else {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

// console.log(zeroBeforePositive(array));

// Task 11

let string = "This is America, yeah let's goooo!";

function whatBetweenSpaces(string) {
    let result;
    let firstWhitespace = string.indexOf(" ");
    let secondWhitespace = string.indexOf(" ", firstWhitespace + 1);
    let spacesCount = string.split(' ').length - 1;
    if (spacesCount > 1) {
       result = string.substring(
        string.indexOf(" ") + 1, 
        string.lastIndexOf(" ", secondWhitespace));
    } else result = " ";
    return result;
}

// console.log(whatBetweenSpaces(string));

// Task 12

string = "Славик и Яна очень любят вкусно покушать";

function findShortest(string) {
    let shortest;
    let words = string.split(' ');

    for (let word of words) {
        if (!shortest || word.length < shortest.length) {
            shortest = word;
        }
    }
    return shortest;
}

// console.log(findShortest(string));

// Task 13

string = "100 + 100 + 100";
// console.log(eval(string));

// Task 14

string = "Южная Корея и Северная корея";

function removeDuplicate(string) {
    let array = string.split(' ');
    console.log(array)
    let result;

    result = array.filter(
        (element, index) => array.indexOf(element) === index);
    return result;
}


// console.log(removeDuplicate(string));

// Task 15

sum = 1200;

function sale(sum) {
    let result;
    if (sum > 1000) {
        result = sum - (sum * 0.10);
    } 
    else if (sum > 500) {
        result = sum - (sum * 0.05);
    } 
    else result = "No skidka";
    return result
}

console.log(sale(sum));
