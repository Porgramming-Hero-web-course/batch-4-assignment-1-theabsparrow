{
    function getProperty<T, K extends keyof T>(obj : T, key: K) : T[K] {
        const result = obj[key];
        return result
    }

    interface Info {
        [key: string]: any;
    }

    const person: Info = {
        name: "Alice",
        age: 30
    };

    const car: Info = {
        name: 'honda',
        model: '3dfb',
        year: 2019,
        price: 12000000
    }

    const result: Info = getProperty(car, 'price')
    // console.log(result);

}