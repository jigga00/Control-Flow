const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
console.log(area);

let space = 0.8;
let plants = 20;


for (let week = 1; week <= 3; week++) {
    console.log(week);
    maxPlants = area / space;
    total = maxPlants * (plants *= 2);
    console.log(total);
    if (total >= (maxPlants * 0.8)) {
        console.log("Pruned");
    }else if (total >= (maxPlants * 0.5) && total <= (maxPlants * 0.8)) {
        console.log("Plant");
    } else{
        console.log("Monitor");
    }
}


