console.log("connected");
/* __  In your Javascript file, create the following object array: */
const students = [
    { name: 'Alice', grades: [85, 92, 78, 90] },
    { name: 'Bob', grades: [75, 88, 95, 100] },
    { name: 'Charlie', grades: [60, 72, 68, 74] },
    { name: 'David', grades: [92, 88, 95, 98] },
    { name: 'Eve', grades: [100, 100, 100, 100] }
];

/* For the following information, add your result to the end of the existing text in the appropriate html element.
        Make sure you use DOM element selection to target the HTML elements; do not add any information to the HTML file.  */

/* __  Use the forEach method to display the name of each student in the appropriate HTML element. */

students.forEach(student => {
    const roster = document.getElementsByClassName("sList");
    roster[0].innerHTML += ` ${student.name},`

});


/* __  Use the every method to check if all students have passed the class. Students need a 60 or higher to pass.). Display the result in the appropriate HTML element. */

let allPass = students.every((student) => {
    let grades = student.grades;
    let passing = grades.every((grade) => {
        return grade > 60;
    })

    return passing
})
/* Display */
if (!allPass | allPass) {
    let classInfo = document.getElementsByTagName('p');
    let passingPost = "";

    for (let i = 0; i < classInfo.length; i++) {
        const pTag = classInfo[i];
        const pInfo = pTag.innerHTML
        if (pInfo.indexOf('passed') !== -1) {
            pTag.innerHTML += ` ${allPass}`
        }
    }
}

/* __  Use the some method to check if at least one student has achieved a perfect score in the class.(All grades are 100.) Display the result in the appropriate HTML element. */
let perfectScore = students.some((student) => {
    let grades = student.grades;
    let pScore = grades.every((grade) => {
        return grade == 100;
    })
    if (pScore) {
        let modelStudent = student.name;
        let classInfo = document.getElementsByTagName('p');

        for (let i = 0; i < classInfo.length; i++) {
            const pTag = classInfo[i];
            const pInfo = pTag.innerHTML
            if (pInfo.indexOf('perfect') !== -1) {
                pTag.innerHTML += ` ${modelStudent},`
            }
        }
    }
    return pScore;
})

/* __  Use the filter method to create the result of all the students with the average grade of 90 or higher. */

let topStu = students.filter((student) => {
    let grades = student.grades;
    let average = 0;
    for (let i = 0; i < grades.length; i++) {
        const grade = grades[i];
        average += grade;
    }
    average = average / grades.length;
    return average > 90;
})

/* Display */
if (topStu) {
    topStu.forEach(student => {
        let classInfo = document.getElementsByTagName('p');

        for (let i = 0; i < classInfo.length; i++) {
            const pTag = classInfo[i];
            const pInfo = pTag.innerHTML
            if (pInfo.indexOf('Top') !== -1) {
                pTag.innerHTML += ` ${student.name},`
            }
        }
    })
}
/* __  Use the map method to create a new array called studentSummaries that will format the data as follows: "Name: [student name] , Average Grade: [average grade]".Each student will be a list item in the unordered list. */

function gradeAvg(arr) {
    let average = 0;
    for (let i = 0; i < arr.length; i++) {
        const grade = arr[i];
        average += grade;
    }
    average = average / arr.length;
    return average;
}
let studentSummaries = students.map((student) => {
    let grades = student.grades;
    let average = gradeAvg(grades);
    return { Name: student.name, Average: average };
})

/* Display */

if (studentSummaries) {
    studentSummaries.forEach(summary => {
        let summaryPost = document.getElementById('studentAvgs');
        summaryPost.innerHTML += `<li>${summary.Name}, ${summary.Average} </li>`
    })
}

/* __  Use the reduce method to calculate the total number of grades across all students.Display your result in the appropriate HTML element.  */

let totalScores = students.reduce((accm, next) => {
    const stuScoreTotal = next.grades.length;
    accm += stuScoreTotal;
    return accm;
}, 0);

/* Display */

if (totalScores != null) {
    let classInfo = document.getElementsByTagName('p');

    for (let i = 0; i < classInfo.length; i++) {
        const pTag = classInfo[i];
        const pInfo = pTag.innerHTML
        if (pInfo.indexOf('Total') !== -1) {
            pTag.innerHTML += ` ${totalScores}`
        }
    }
}