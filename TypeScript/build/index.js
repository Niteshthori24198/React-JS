let a = [];
a.push(1);
a.push('1');
// Objects 
let User = {
    id: 1,
    name: "Nitesh",
    havejob: false
};
let Obj = {
    id: 1,
    name: 'Nitesh',
    havejob: false
};
let arr = [Obj];
console.log(arr);
// now we combine two types : [ 
//     {
//         id:1,
//         name:'nitesh',
//         havejob:false,
//         phone:123,
//         address:'xxx',
//         email:'a@1'
//     }
//  ]
// we can use ' | ' as well as ' & ' [ for strictness so every property should be mandatory.]
let myarr = [
    {
        id: 1,
        name: 'nitesh',
        havejob: false,
        phone: 123,
        address: 'xxx',
        email: 'a@1'
    },
    {
        id: 1,
        name: 'nitesh',
        havejob: false,
        phone: 123,
        address: 'xxx',
        email: 'a@1'
    }
];
// Generic functions : 
function Add(a) {
    return a;
}
Add(2);
Add('2');
const st = {
    id: 1,
    name: 'nitesh',
    address: 'xxx'
};
// classes : 
class Car {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Thar extends Car {
    constructor(name, price, color, type) {
        super(name, price);
        this.color = color;
        this.type = type;
    }
}
const mythar = new Thar("Mahindra", 1000000, "Black", "Petrol");
console.log(mythar);
//# sourceMappingURL=index.js.map