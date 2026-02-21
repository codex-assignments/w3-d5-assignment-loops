"use strict";

const tags = ["js", "week3"];
const scores = [10, 25, 18, 30];
let totalScore = 0; // Initialize "accumulator"

for (let i = 0; i < scores.length; i++){ 
    totalScore += scores[i]; //Add each item from array "scores" to the sum
};
console.log(totalScore); //Output: 83

tags.forEach(function (tag) {
  console.log(tag);
});

const doubledScores = scores.map((score) => {
    return score *2
})

console.log(doubledScores);

