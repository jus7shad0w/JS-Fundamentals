function grades(input) {
    let studentGradesMap = {};

    for (let entry of input) {
        let [name, ...grades] = entry.split(' ');

        if (studentGradesMap.hasOwnProperty(name)) {
            studentGradesMap[name] = studentGradesMap[name].concat(grades.map(Number));
        } else {
            studentGradesMap[name] = grades.map(Number);
        }

    }
    let sortedStudents = Object.keys(studentGradesMap).sort();
    for (let student of sortedStudents) {
        let averageGrade = calculateAverage(studentGradesMap[student]).toFixed(2);
        console.log(`${student}: ${averageGrade}`);
    }
    function calculateAverage(grades) {
        let sum = grades.reduce((acc, grade) => acc + grade, 0);
        return sum / grades.length;
    }
}

grades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6'])
grades(['Steven 3 5 6 4', 'George 4 6', 'Tammy 2 5 3', 'Steven 6 3'])
//to be remake...