
// ==========================================
console.log("----------");
console.log("Opdracht 1");
const a = "*";
for (let i = 1; i < 6; i++){
    console.log(a.repeat(i))
}

// ==========================================
console.log("----------");
console.log("Opdracht 2");
for (let i = 0; i < 5; i++){
    if (i < 4 ){
        console.log("Loop");
    }
    else{
        console.log("Klaar!");
    }
}
// ==========================================
console.log("----------");
console.log("Opdracht 3");
for (let i = 0; i < 10; i++){
    if( i < 3){
        console.log(i);
    }
    else if (i < 6){
        console.log("> " + i)
    }
    else {
        console.log(">> " + i)
    }
}
// ==========================================
console.log("----------");
console.log("Opdracht 4 - Bonus");
for(let i = 0; i < 101; i++){
    if(i % 3 === 0 && i % 5 ===0){
        console.log("Fizzbuzz");
    }
    else if(i % 3 === 0){
        console.log("Fizz")
    }
    else if(i % 5 === 0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}