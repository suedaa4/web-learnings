const maxCapacity = 100;
let currentWeight = 0;
const packages = [20, 30, 10, 50, 15];

function optimizeShippingGrid() {
    for(let i=0; i < packages.length; i++){
        if(currentWeight + packages[i] <= maxCapacity){
            currentWeight += packages[i];
            console.log(`Loaded package weighing ${packages[i]} kg. Current truck weight: ${currentWeight} kg.`)
            
        }
        else{
            console.log(`Truck is full! Cannot load package weighing ${packages[i]} kg.`)
            break;
        }
    }
}

optimizeShippingGrid();