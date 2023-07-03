let result;
let digit = 1;
//2 > digit && (result = "yes") || (result = "no");//yes
//2 > digit ? result = "yes" : result = "no";//yes
2 < digit || (result = "no");//no//&&(and,true),||(or,false)
console.log(result);
let house4 = [
    {id: 1, name: "Jonas", flat: 1},
    {id: 8, name: "Petras", flat: 6},
    {id: 3, name: "Bebras", flat: 3}
];
house4[1].name = "Ona";
console.log(house4.find(i => i.id === 3));

function fun(a) {
    return "fun" + a;
}
let fun2 = function(a) {
    return "fun" + a;
}
let fun3 = (a) => {
    return "fun" + a;
}
let fun4 = (a) => "fun" + a;
let fun5 = fun2;
let fancy = _ => console.log("fancy");
console.log(fun(1));
console.log(fun2(2));
console.log(fun3(3));
console.log(fun4(4));
console.log(fun5(5));
fancy();
let nicePrint = (a, b, fun) => {
    let p = fun(a, b);
    console.log("%c" + p, "background: skyblue; color: white; padding: 5px; border-radius: 5px;");
}
let sum = (a,b) => {
    return a + b;
}
let multiply = (a,b) => a * b;
let divide = (a,b) => a / b;
nicePrint(1, 2, sum);
nicePrint(1, 2, multiply);
nicePrint(1, 2, (a,b) => a / b);


let colorsHouse = [
    {id: 1, name: "Jonas", flat: 1, color: "red"},
    {id: 8, name: "Petras", flat: 6, color: "blue"},
    {id: 3, name: "Bebras", flat: 3, color: "green"},
    {id: 44, name: "Ona", flat: 3, color: "yellow"},
    {id: 5, name: "Maryte", flat: 3, color: "pink"},
    {id: 6, name: "Kazys", flat: 3, color: "orange"},
    {id: 7, name: "Kotryna", flat: 3, color: "purple"}
];
let colorsAnimal = [
    {id: 1, name: "Racoon", color: "red"},
    {id: 8, name: "Cat", color: "blue"},
    {id: 3, name: "Dog", color: "green"},
    {id: 44, name: "Mouse", color: "yellow"},
    {id: 5, name: "Rabbit", color: "pink"},
    {id: 6, name: "Fox", color: "orange"},
    {id: 7, name: "Wolf", color: "purple"}
];
for (let i=0; i < colorsHouse.length; i++) {
    let house = colorsHouse[i];
    console.log("%c" + house.name, "background: " + house.color + "; color: white; padding: 5px; border-radius: 5px;");
}
let arrayWalker = (array10, fun10) => {
    for (let i = 0; i < array10.length; i++) {
        let item10 = array10[i];
        fun10(item10);
    }
}
let housePrinter = house => {
    console.log("%c" + house.name, "background: " + house.color + "; color: white; padding: 5px; border-radius: 5px;");
}
arrayWalker(colorsHouse, housePrinter);
arrayWalker(colorsAnimal, housePrinter);
colorsAnimal.forEach(housePrinter);
colorsAnimal.forEach((house, index) => console.log(house.color, index));
colorsAnimal.map((house, index) => console.log(house.color, index));
let fe = colorsAnimal.forEach((house, _) => ({color: house.color, name: house.name}));//Undefined
let ma = colorsAnimal.map((house, _) => ({color: house.color, name: house.name}));//Veikia
console.log(fe);
console.log(ma);
