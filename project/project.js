// 1. Student Profile Setup
let studentName = "Rafi Ullah ";
const studentAge = 21;
var enrolledCourse = "Computer Science";
let Scores = [85, 90, 88]; // Math, English, Science
const totalMarks = Scores.reduce((sum, score) => sum + score, 0);

// Calculate Average & total marks
const average = totalMarks / Scores.length;

console.log("Total Marks:", totalMarks);
console.log("Average is:", average);






// 3. Performance Evaluation
let marks = prompt("Enter you'r marks")
if (marks >=86 && marks<=100){
        console.log("A")
}else if (marks >76 && marks <=85){
        console.log("B")
}else if (marks >=60 && marks <=75){
       console.log("C")
}else if ( marks >=50 && marks <= 59){
      console.log("D")
}else{
        console.log("F")
}


console.log(`Student ${studentName} has an average of ${average.toFixed(2)} and marks ${marks}`);



const student = {
    name: studentName,
    age: studentAge,
    course: enrolledCourse,
    
    summary() {
        return `Student ${this.name} is enrolled in ${this.course} with an average of ${average.toFixed(2)} and has grade ${marks}.`;
    }
};

//Advanced Array & Looping
console.log("Using for loop:");
for (let i = 0; i < marks.length; i++) {
    if (isNaN(marks[i]) || marks[i] === undefined) {
        console.log(`Invalid score at index ${i}, skipping...`);
        continue;
    }
    console.log(`Subject ${i + 1} score: ${marks[i]}`);
}

console.log("\nUsing while loop:");
let i = 0;
while (i < marks.length) {
    if (isNaN(marks[i]) || marks[i] === undefined) {
        console.log(`Invalid score at index ${i}, breaking...`);
        break;
    }
    console.log(`Subject ${i + 1} score: ${marks[i]}`);
    i++;
}

//  Bonus: Report Type Switch
let isEligible;
let NotEligible;
function generateReport(reportType) {
    switch (reportType.toLowerCase()) {
        case "basic":
            console.log(`Basic Report: ${student.name}, marks: ${marks}`);
            break;
        case "detailed":
            console.log(`Detailed Report: ${student.summary()}`);
            console.log(`Scores - Math: ${marks[0]}, English: ${marks[1]}, Science: ${marks[2]}`);
            break;
        case "scholarship check":
            console.log(`Scholarship Status: ${isEligible } "Eligible" : ${NotEligible}}`);
            break;
        default:
            console.log("Invalid report type. Choose: basic, detailed, or scholarship check");
    }
}

// Test different report types
console.log("\nTesting Report Types:");
generateReport("basic");
generateReport("detailed");
generateReport("scholarship check");
generateReport("invalid");





