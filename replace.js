// let baby = "baby shark"
// let dodo = "doo doo doo doo doo"
// for(let i=0;i<5;i++){
// console.log(baby, dodo, )
// }console.log(baby)

// let daddy = baby.replace("baby", "daddy")
// for(let i= 0; i<5;i++){
// console.log(daddy,dodo)
// } console.log(daddy)

// let shark = ["baby shark", "daddy shark", "mommy shark"]
// let dodo = "ehlel doo doo doo doo doo"

// shark.map((baby) =>{
//     let line= dodo.replace ("ehlel" , baby)
//     for(let i= 0 ;i<3;i++){
//         console.log(line)
//     } console.log(baby, "!")
// })

// let string1 = "Hello|world|my|name|is|Tem";
// let array = string1.split("|");
// console.log(array[1]);

// let text = " hello world im fullstack developer";
// let mosturt = text.split(" ");
// console.log(mosturt[4]);

let text = " hello world im fullstack developer";
let splited = text.split(" ");
let replaced = text.replace(splited[splited.length - 1], splited[1]);
let last = replaced.replace(splited[1], splited[splited.length - 1]);
console.log(last);
