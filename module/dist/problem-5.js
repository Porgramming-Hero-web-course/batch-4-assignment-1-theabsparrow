"use strict";
{
    function getProperty(obj, key) {
        const result = obj[key];
        return result;
    }
    const person = {
        name: "Alice",
        age: 30
    };
    const car = {
        name: 'honda',
        model: '3dfb',
        year: 2019,
        price: 12000000
    };
    const result = getProperty(car, 'price');
    // console.log(result);
}
