let a: Array<number | string> = [];
a.push(1)
a.push('1')


// Objects 


let User = {
    id: 1,
    name: "Nitesh",
    havejob: false
}

// but we cannot add types here, so we use custom types : type : it can be used for any data type


type User = {
    id: number,
    name: string,
    havejob: boolean
}


type Details = {
    address: string,
    phone: number,
    email: string
}



let Obj: User = {
    id: 1,
    name: 'Nitesh',
    havejob: false
}


let arr: Array<User> = [Obj]

console.log(arr)


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

let myarr: Array<User | Details> = [

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

function Add<Type>(a: Type): Type {
    return a;

}



Add<number>(2)
Add<string>('2')




// interface : it's only used for objects

interface student {
    id: number,
    name: string
}


interface studentInfo extends student {
    address: string
}


const st: studentInfo = {
    id: 1,
    name: 'nitesh',
    address: 'xxx'
}



// classes : 

class Car {
    name: string;
    price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}


type EngineType = "Petrol" | "Disel"


class Thar extends Car {

    color: string;

    type: EngineType;

    constructor(name: string, price: number, color: string, type: EngineType) {

        super(name, price);

        this.color = color;

        this.type = type;
    }

}


const mythar = new Thar("Mahindra", 1000000, "Black", "Petrol")

console.log(mythar)