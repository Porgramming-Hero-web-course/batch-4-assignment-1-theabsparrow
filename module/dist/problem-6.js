"use strict";
{
    function updateProfile(myProfile, updatedInfo) {
        const newProfile = Object.assign(Object.assign({}, myProfile), updatedInfo);
        return newProfile;
    }
    const myProfile = {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    };
    const updatedInfo = { age: 15 };
    const result = updateProfile(myProfile, updatedInfo);
    // console.log(result);
}
