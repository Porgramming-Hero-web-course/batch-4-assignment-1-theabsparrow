"use strict";
{
    function calculateShapeArea(value) {
        let area = 0;
        if (value.shape === 'rectangle') {
            const rectangleHeight = value.height;
            const rectangleWeidth = value.width;
            const rectangleArea = rectangleHeight * rectangleWeidth;
            area = rectangleArea;
        }
        else if (value.shape === 'circle') {
            const circleRadius = value.radius;
            const circleArea = Math.PI * circleRadius * circleRadius;
            area = circleArea;
        }
        return area;
    }
    const circleInfo = {
        shape: 'circle',
        radius: 4
    };
    const rectangleInfo = {
        shape: 'rectangle',
        height: 5,
        width: 7
    };
    const resultForCircle = calculateShapeArea(rectangleInfo);
    // console.log(resultForCircle)
}
