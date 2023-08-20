declare let a: Array<number | string>;
declare let User: {
    id: number;
    name: string;
    havejob: boolean;
};
type User = {
    id: number;
    name: string;
    havejob: boolean;
};
type Details = {
    address: string;
    phone: number;
    email: string;
};
declare let Obj: User;
declare let arr: Array<User>;
declare let myarr: Array<User | Details>;
declare function Add<Type>(a: Type): Type;
interface student {
    id: number;
    name: string;
}
interface studentInfo extends student {
    address: string;
}
declare const st: studentInfo;
declare class Car {
    name: string;
    price: number;
    constructor(name: string, price: number);
}
type EngineType = "Petrol" | "Disel";
declare class Thar extends Car {
    color: string;
    type: EngineType;
    constructor(name: string, price: number, color: string, type: EngineType);
}
declare const mythar: Thar;
