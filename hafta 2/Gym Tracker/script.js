const dailyWater = 2.5;
const dailyGoal = 3;
const takenCalorie = 2000;
const burnedCalorie = 600;

function calculateWaterStatus(){
    const waterLeft = dailyGoal - dailyWater;
    console.log(`Remaining water goal: ${waterLeft}`);
}

function calculateNetCalories(){
    const netCalories = takenCalorie -burnedCalorie;
    console.log(`Net calories for today: ${netCalories}`);
}

function showDailyReport(){
    console.log("--- DAILY GYM REPORT ---");
    calculateWaterStatus();
    calculateNetCalories();
}

showDailyReport();
