// YOUR CODE BELOW

const everyWhichWay = (a, b, c) => {
    if (a + b === c) return 'sum';
    if (a - b === c) return 'difference';
    if (a * b === c) return 'product';
    if (a / b === c) return 'fraction';
    else return null;
}