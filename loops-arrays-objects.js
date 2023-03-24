// ==========================================

console.log("----------");
console.log("Opdracht 1a");
const scores = [
    {name: 'Max', score: 83, grade: null},
    {name: 'David', score: 77, grade: null},
    {name: 'Khalid', score: 92, grade: null},
    {name: 'Rianne', score: 66, grade: null}
];

for (let i = 0; i < scores.length; i++){
    console.log(scores[i].score);
}

// ==========================================

console.log("----------");
console.log("Opdracht 1b");
for (let i = 0; i < scores.length; i++){
    if (scores[i].score < 60){
        console.log("F");
    }
    else if(scores[i].score < 70){
        console.log("D");
    }else if(scores[i].score < 80){
        console.log("C");
    }else if(scores[i].score < 90){
        console.log("B");
    }
    else{
        console.log("A");
    }
}

// ==========================================

console.log("----------");
console.log("Opdracht 1c");
for (let i = 0; i < scores.length; i++){
    if (scores[i].score < 60){
        scores[i].grade = "F";
    }
    else if(scores[i].score < 70){
        scores[i].grade = "D";
    }else if(scores[i].score < 80){
        scores[i].grade = "C";
    }else if(scores[i].score < 90){
        scores[i].grade = "B";
    }
    else{
        scores[i].grade = "A";
    }
}
console.log(scores);

// ==========================================

console.log("----------");
console.log("Opdracht 2");
const NOVIEmployees = [
    {firstName: 'Nova', lastName: 'Eeken'},
    {firstName: 'Sam', lastName: 'Barnhoorn'},
    {firstName: 'Tessa', lastName: 'Steur'},
    {firstName: 'Mark', lastName: 'Rensen'},
];

for (let i = 0; i < NOVIEmployees.length; i++){
    NOVIEmployees[i].email = NOVIEmployees[i].firstName + NOVIEmployees[i].lastName + "@novi.nl";
}
console.log(NOVIEmployees);


// ==========================================
console.log("----------");
console.log("Opdracht 2 - Bonus");
for (let i = 0; i < NOVIEmployees.length; i++){
    NOVIEmployees[i].email = NOVIEmployees[i].firstName.toLowerCase() + NOVIEmployees[i].lastName.toLowerCase() + "@novi.nl";
}
console.log(NOVIEmployees);

// ==========================================

const students = [
    {name: 'Mariska', city: 'Utrecht', zipCode: '3513', neighborhood: null},
    {name: 'Mehmet', city: 'Utrecht', zipCode: '3514', neighborhood: null},
    {name: 'Dennis', city: 'Utrecht', zipCode: '3572', neighborhood: null},
    {name: 'Robin', city: 'Utrecht', zipCode: '3581', neighborhood: null},
    {name: 'Tanush', city: 'Utrecht', zipCode: '3512', neighborhood: null},
    {name: 'Florien', city: 'Utrecht', zipCode: '3513', neighborhood: null},
    {name: 'Larissa', city: 'Utrecht', zipCode: '3583', neighborhood: null},
    {name: 'Marijn', city: 'Utrecht', zipCode: '3572', neighborhood: null},
    {name: 'Jan', city: 'Utrecht', zipCode: '3531', neighborhood: null},
    {name: 'Laura', city: 'Utrecht', zipCode: '3531', neighborhood: null},
    {name: 'Aicha', city: 'Utrecht', zipCode: '3514', neighborhood: null},
    {name: 'Karima', city: 'Utrecht', zipCode: '3531', neighborhood: null},
];


console.log("----------");
console.log("Opdracht 3");

for (let i = 0; i < students.length; i++){
    switch (students[i].zipCode){
        case "3513":
            students[i].neighborhood = "Pijlsweerd";
        break;
        case "3514":
            students[i].neighborhood = "Vogelenbuurt";
        break;
        case "3512":
            students[i].neighborhood = "Binnenstad";
        break;
        case "3531":
            students[i].neighborhood = "Lombok";
        break;
        case "3572":
            students[i].neighborhood = "Wittevrouwen";
        break;
        case "3581":
            students[i].neighborhood = "Oudwijk";
        break;
        case "3583":
            students[i].neighborhood = "Schildersbuurt";
        break;
    }
}
console.log(students)
// ==========================================



