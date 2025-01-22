const car = {
    Brand: 'Toyota',
    Model: 'Corolla',
    Year: 2004
};

// console.log('Brand: ' + car.brand);
// console.log('Model: ' + car.model);
// console.log('Year: ' + car.year);

for (let key in car){
    console.log(`${key}: ${car[key]}`);
}