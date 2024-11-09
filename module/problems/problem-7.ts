{
    class Car {
        make: string;
        model: string;
        year: number;

        constructor({ make, model, year }: { make: string; model: string; year: number }) {
            this.make = make;
            this.model = model;
            this.year = year;
        }

        getCarAge(): number {
            const runningYear = new Date().getFullYear();
            const carYear = this.year;
            const age = runningYear - carYear;
            return age;
        }
    }

    type CarType = {
        make: string;
        model: string;
        year: number;
    }

    const carInfo: CarType = {
        make: "honda",
        model: 'civic',
        year: 2010
    }
    const car = new Car(carInfo);
    const result = car.getCarAge();
    // console.log(result);
}