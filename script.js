const PI = 3.1415;

let space = 0.8;
let plants = 100;
let week = 10;

let area = plants * space * 2 *  week;

console.log(area + " square meters");

let radius = 0.5 * (area / PI)
console.log(radius + " radius");