console.log("Hello world!");
let x = 3;
let y: string;
y = "dupa";

console.log(x,y);

let arr: Array<number> = [1, 2, 3];

console.log(arr.length);

let ggg = `number x = ${x}`;

console.log(ggg);

interface Customer {
  name: string;
  age?: number;
}

function welcome(customer: Customer): string {
  return `Welcome ${customer.name}`;
}

console.log(welcome({name: "Marian"}));

console.log(["Jan", "Adam"].map(welcome{name:"Marian"}));

console.log(["Johnny", "Steven"].map(customer => `Welcome ${customer.name}`));
