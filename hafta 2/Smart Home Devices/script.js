const smartAC= {deviceName:"Living Room AC",
                 isOn:true,
                currentTemp:24,
                modes:["Cool", "Heat", "Fan"]};

function updateAC(){
    smartAC.currentTemp += 1;
    smartAC.modes[0];

    console.log(`Current Mode: ${smartAC.modes[0]}`);
    console.log(`${smartAC.deviceName} is now set to ${smartAC.currentTemp}`)
}
updateAC();