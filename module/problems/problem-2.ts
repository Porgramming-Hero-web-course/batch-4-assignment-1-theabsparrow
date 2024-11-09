{
    function removeDuplicates(numArr: number[]): number[] {
        const numbers: number[] = [];

        for (const number of numArr) {
            if (!numbers.includes(number)) {
                numbers.push(number);
            }
        }
        return numbers;
    }

    const numArr : number[] = [1, 2, 2, 3, 4, 4, 5,11,11,11, 15, 15, 15, 20, 20, 25, 25];
    const result : number[] = removeDuplicates(numArr);
    // console.log(result);
}