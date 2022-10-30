// Objects
let cars = [
    {
        model: "Golf",
        make: "Volkswagen",
        year: 1999,
        color: "black",
    },
    {
        model: "Picanto",
        make: "Kia",
        year: 2020,
        color: "red",
    },
    {
        model: "Peugeot",
        make: "208",
        year: 2021,
        color: "black",
    },
    {
        model: "Fiat",
        make: "Punto",
        year: 2020,
        color: "black",
    }
];
// Using break
for(let i = 0; i < cars.length; i++){
    if(cars[i].year >= 2020){
        if(cars[i].color == "black"){
            console.log("I have found my new car: ", cars[i]);
            break;
        }
    }
}
// Using continue
for(let car of cars){
    if(car.color == "black"){
        continue;
    }
    if(car.year >= 2020){
        console.log("I have found my new car: ", car);
    }
}