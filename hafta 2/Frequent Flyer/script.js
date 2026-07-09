function calculateTotalMiles(flightDistance, isInternational) {
    
    let earnedMiles= 0;
    
    if(isInternational == true){
        earnedMiles = flightDistance * 2;
        console.log(`Congrats! You won 2x mil. Your current mil : ${earnedMiles}`);
    }
    else{
        earnedMiles = flightDistance;
        console.log(`You won 1x mil. Your current mil: ${earnedMiles} `);
    }

    return earnedMiles;
}

 let myMiles = calculateTotalMiles(1000, true);

 function determineTier(totalMiles){
    if(totalMiles >= 2000){
        return "ELITE";
    }
    else{
        return "CLASSIC";
    }
 }

 myMiles = calculateTotalMiles(1000,true);
 let userStatus = determineTier(myMiles);

 console.log(`Passenger Status: ${userStatus}`);