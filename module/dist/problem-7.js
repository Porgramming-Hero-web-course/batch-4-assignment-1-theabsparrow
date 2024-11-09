"use strict";
{
    class Car {
        constructor({ make, model, year }) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            const runningYear = new Date().getFullYear();
            const carYear = this.year;
            const age = runningYear - carYear;
            return age;
        }
    }
    const carInfo = {
        make: "honda",
        model: 'civic',
        year: 2010
    };
    const car = new Car(carInfo);
    const result = car.getCarAge();
    // console.log(result);
}
