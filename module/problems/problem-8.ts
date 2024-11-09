{
    function validateKeys<T extends PersonInfo>(obj: T, keys: (keyof T)[]): boolean {

        for(const key of keys) {
            if(!(key in obj)) {
                return false
            }
        }
        return true
    }

    interface PersonInfo {
        [key: string]: any;
    }

    type KeyType = (keyof PersonInfo)[];

    const person : PersonInfo = {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    };

    const keys : KeyType = ['name', 'age']

    const result: boolean = validateKeys(person, keys)
    // console.log(result)
}