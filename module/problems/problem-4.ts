{
    type Rectangle = {
        shape: 'rectangle';
        height: number;
        width: number;
    }

    type Circle = {
        shape: 'circle';
        radius: number;
    }

    type Shape = Rectangle | Circle;

    function calculateShapeArea(value: Shape): number {

        let area: number = 0;

        if (value.shape === 'rectangle') {
            const rectangleHeight: number = value.height;
            const rectangleWeidth: number = value.width;

            const rectangleArea: number = rectangleHeight * rectangleWeidth;
            area = rectangleArea

        }

        else if (value.shape === 'circle') {
            const circleRadius: number = value.radius;
            const circleArea: number = Math.PI * circleRadius * circleRadius
            area = circleArea;
        }

        return area;
    }

    const circleInfo: Circle = {
        shape: 'circle',
        radius: 4
    }

    const rectangleInfo: Rectangle = {
        shape: 'rectangle',
        height: 5,
        width: 7
    }

    const resultForCircle = calculateShapeArea(rectangleInfo)
    // console.log(resultForCircle)
}