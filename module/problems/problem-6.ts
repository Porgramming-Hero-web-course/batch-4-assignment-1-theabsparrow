{
    function updateProfile(myProfile: Profile, updatedInfo: PartialProfile): Profile {
        const newProfile = { ...myProfile, ...updatedInfo };
        return newProfile;
    }

    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    type PartialProfile = Partial<Profile>

    const myProfile: Profile = {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    };

    const updatedInfo: PartialProfile = { age: 15 }
    const result = updateProfile(myProfile, updatedInfo)
    // console.log(result);
}