const student = {
    sname: "raj", // Correct use of key-value pair with a colon
    sage: 20
};

const sectionD = {
    ...student,   // Spread the properties of the student object into sectionD
    no_student: 71
};

console.log(sectionD);