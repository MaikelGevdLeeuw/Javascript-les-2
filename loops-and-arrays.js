// ==========================================
console.log("----------");
console.log("Opdracht 1");
const names = ["Henk", "Piet", "Fred", "Joop"];
console.log(names)
for (let i = 0; i < names.length; i++){
    names[i] = names[i] + "je";
}
console.log(names);


// ==========================================
console.log("----------");
console.log("Opdracht 2");
const numbers = [2, 4, 5, 29, 38];

console.log(numbers)
for (let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        numbers[i] = numbers[i] * 2;
    }
    else{
        numbers[i] = numbers[i] * 3;
    }
}
console.log(numbers);


// ==========================================
console.log("----------");
console.log("Opdracht 3");
const squares = [30, 2, 8, 24, 11];
console.log(squares);

for (let i = 0; i < squares.length; i++){
    squares[i] = "het volume van " + squares[i] + " is " + squares[i]**3
}
console.log(squares);



