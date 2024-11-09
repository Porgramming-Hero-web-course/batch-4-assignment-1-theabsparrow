"use strict";
{
    function validateKeys(obj, keys) {
        for (const key of keys) {
            if (!(key in obj)) {
                return false;
            }
        }
        return true;
    }
    const person = {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    };
    const keys = ['name', 'age'];
    const result = validateKeys(person, keys);
    // console.log(result)
}
