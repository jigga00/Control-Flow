const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
console.log(area);
let space = 0.8;
let plants = 100;
let week = 10;
let newarea = plants * space * 2 *  week;
console.log(newarea);

try{
    if(newarea < area){
    console.log("You can add more plant");
    } else if (newarea == area){
        console.log("You have the exact amount plants");
    } else{
        throw("TOO MANY PLANTS")
    }
} catch(error){
    console.log(error);
}