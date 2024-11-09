"use strict";
{
    function sumArray(numArr) {
        let sum = 0;
        for (let i = 0; i < numArr.length; i++) {
            sum += numArr[i];
        }
        return sum;
    }
    const numbers = [1, 41, 3, 20, 5];
    const result = sumArray(numbers);
    // console.log(result); 
}
