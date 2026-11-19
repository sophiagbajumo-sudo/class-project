function calculateGrade() {
 const scoreInput = document.getElementById("scoreInput").value;
const resultDiv = document.getElementById("result");

const score = Number(scoreInput);

if (scoreInput === "" || isNaN(score)) {
        resultDiv.style.color = "red";
        resultDiv.innerText = "Please enter a valid number!";
        return;
}

    let grade = "";
    let color = "black";

    if (score >= 90 && score <= 100) {
        grade = "A (Excellent)";
        color = "green";
    } else if (score >= 80 && score < 90) {
        grade = "B (Good)";
        color = "blue";
    } else if (score >= 70 && score < 80) {
        grade = "C (Average)";
        color = "orange";
    } else if (score >= 60 && score < 70) {
        grade = "D (Needs Improvement)";
        color = "purple";
    } else if (score >= 0 && score < 60) {
        grade = "F (Fail)";
        color = "red";
    } else {
        grade = "Invalid score! Please enter a number between 0 and 100.";
        color = "red";
    }

   
    resultDiv.style.color = color;
    resultDiv.innerText = `Result: ${grade}`;
}


