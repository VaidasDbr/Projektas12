let c;
let d;
c = [5];
d = c;
//d = [...c];//Idomu
c.push(6);
d.push(7);
console.log("c:", c,"d:", d);

let e;
let f;
e = { value: 5, name: "John", animal: "dog"};
f = e;
f = { ...e, name: "Simas", color: "green", animal: "cat"};
e.color = "red";
console.log("e:", e, "f:", f);

let g = [1, 77, 3, 4, 5];
let [first, second] = g;
console.log("first:", first, "second:", second);

let h = { value: 5, name: "John", animal: "dog"};
let { value, animal } = h;
console.log("value:", value, "animal:", animal);

let house = [
    { id: 5, name: "Petras", animal: "dog", color: "red", price: 1000 },
    { id: 6, name: "Ona", animal: "cat", color: "blue", price: 85 },
    { id: 77, name: "Simas", animal: "racoon", color: "green", price: 687 },
    { id: 8, name: "Jonas", animal: "fox", color: "orange", price: 4 },
    { id: 9, name: "Maryte", animal: "dog", color: "black", price: 77 },
    { id: 10, name: "Egle", animal: "cat", color: "white", price: 1000 },
    { id: 11, name: "Kestas", animal: "dog", color: "red", price: 1000 },
    { id: 12, name: "Greta", animal: "racoon", color: "blue", price: 85 },
];
house.forEach(m => m.animal === 'cat' ? m.color = "yellow" : null);
console.log(house);
let newHouse = house.map(m => m.animal === 'cat' ? { ...m, color: "yellow" } : {...m});
console.log(newHouse);
let ownRacoon = house.filter(m => m.animal === "racoon");
console.log(ownRacoon);
let ownRacoon2 = house.find(m => m.animal === "racoon");
console.log(ownRacoon2);
let deport = house.filter(m => m.name !== "Jonas");
console.log(deport);
let sortHoude = [...house].sort((a, b) => a.price - b.price);
console.log(sortHoude, house);
let sortByName = [...house].sort((a, b) => a.name.localeCompare(b.name));
console.log(sortByName);
let allRacoons = house.filter(m => m.animal === "racoon").sort((a, b) => a.name.localeCompare(b.name));
console.log(allRacoons, house);