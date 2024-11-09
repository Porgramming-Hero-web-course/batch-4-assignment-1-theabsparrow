"use strict";
{
    function removeDuplicates(numArr) {
        const numbers = [];
        for (const number of numbers) {
            if (!numbers.includes(number)) {
                numbers.push(number);
            }
        }
        return numbers;
    }
    const numArr = [1, 2, 2, 3, 4, 4, 5];
    const result = removeDuplicates(numArr);
    console.log(result);
}
