
function sumArray(numArr: number[]): number {
    let sum: number = 0;
    for (let i = 0; i < numArr.length; i++) {
        sum += numArr[i];
    }
    return sum;
}

const numbers: number[] = [1, 41, 3, 20, 5];
const result: number = sumArray(numbers);
console.log(result);