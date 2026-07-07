const midterm1 = 70;
const midterm2 = 80;
const final = 85;

const midtermWeight = 0.40;
const finalWeight = 0.60;

function calculateGrade(){

   const midtermAverage = (midterm1 + midterm2) / 2;
   const totalGrade = (midtermWeight * midtermAverage) + (final * finalWeight);

    console.log(`Midterm Average: ${midtermAverage}`);
    console.log(`Final Grade: ${final}`);
    console.log(`Total Success Grade: ${totalGrade}`);
}

calculateGrade();