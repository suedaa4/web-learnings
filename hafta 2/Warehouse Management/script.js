const warehouse = {
    warehouseName: "Central Logistics",
     categories: {
        electronics: [
            {id:101, name:"Laptop", price:15000, stock:5, fragile:true},
            {id:102, name:"Phone", price:8000, stock: 0, fragile: true}
        ],
        furniture: [
            {id:201, name:"Table", price:2000, stock:12, fragile: false},
            {id:202, name:"Mirror", price:500, stock:3, fragile:true}
        ]
     }
};

let totalValue = 0;
let fragileItemsWarningCount = 0;

function processWarehouse(){
    for (let i = 0; i < warehouse.categories.electronics.length; i++) {
        let currentItem = warehouse.categories.electronics[i];
        
        if (currentItem.stock === 0) {
            continue; 
        }
        
        totalValue += currentItem.price * currentItem.stock; 
        if (currentItem.fragile === true) {
            fragileItemsWarningCount++; 
        }
    }

    
    for (let j = 0; j < warehouse.categories.furniture.length; j++) {
        let currentItem = warehouse.categories.furniture[j];
        
        if (currentItem.stock === 0) {
            continue; 
        }
        
        totalValue += currentItem.price * currentItem.stock; 
        
        if (currentItem.fragile === true) {
            fragileItemsWarningCount++; 
        }
    }
    console.log(`Total Active Stock Value: ${totalValue} TL`);
    console.log(`Alert! ${fragileItemsWarningCount} fragile items need special packaging.`);
}

processWarehouse();
