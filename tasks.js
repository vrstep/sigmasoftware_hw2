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

console.log(swapThreeDigit(562));
console.log(swapThreeDigit(123));
console.log(swapThreeDigit(879));
console.log(swapThreeDigit(49));