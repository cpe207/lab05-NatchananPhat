// assign interface/type to the function definition properly
function findTopNames(students) {
    var scoree = students.filter(function (student) { return student.score > 8; });
    var namee = scoree.map(function (student) { return student.name; });
    return namee;
}
// assign interface/type to the student1 object properly
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
module.exports = findTopNames;
