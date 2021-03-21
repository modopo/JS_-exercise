let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let x = 0; x < cities.length; x++) {
    if (cities[x] === null) {
        continue;
    }
    
    console.log(cities[x]);
};