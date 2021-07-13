"use strict";
// let count = 0; // 숫자
// count += 1;
// // count = '갑자기 분위기 문자열' // 이러면 에러가 납니다!!
var Circle = /** @class */ (function () {
    // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시합니다.
    // radius: number; // 멤버 변수 radius 값을 설정합니다.
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    // 너비를 가져오는 함수를 구현합니다.
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    // width: number;
    // height: number;
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var circle = new Circle(5);
var rectangle = new Rectangle(10, 5);
console.log(circle.radius);
// console.log(rectangle.width); // priavate 조회 불가
var shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
