// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 



// EXAMPLE

// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }




//MY ATTEMPT

// class engineer{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return _name
//     }
//     get role(){
//         return _role
//     }
//     greetings(){
//         console.log(`Hello I am ${_name} and I am a ${role}`)
//     }
// }

// class FrontEndEngineer extends engineer{
//     constructor(name,role,primaryLanguage){
//         super(name,role)
//         this._primaryLanguage = primaryLanguage
//     }
//     get primaryLanguage(){
//         return this._primaryLanguage
//     }
//     FEgreetings(){
//         console.log(`Hello I am ${_name} a Front End Engineer using ${this.primaryLanguage}`)
//     }

// }

// class BackEndEngineer extends engineer{
//     constructor(name,role,primaryLanguage){
//         super(name,role)
//         this._primaryLanguage = primaryLanguage
//     }
//     get primaryLanguage(){
//         return this._primaryLanguage
//     }
//     BEgreetings(){
//         console.log(`Hello I am ${name} a Back End Engineer using ${this.primaryLanguage}`)
//     }

// }




//GUIDED PRACTICE
// class Contracter{
//     constructor(name,roll){
//         this._name = name
//         this._roll = roll
//     }
//     get name(){
//         return this._name
//     }
//     get roll(){
//         return this._roll
//     }
//     sayHello(){
//         console.log(`Hello my name is ${this._name} and I'm on the ${this._roll}`)
//     }
//     sayBye(){
//         console.log(`Goodbye it was nice working with you`)
//     }
// }

// class Front extends Contracter{
//     constructor(name,roll,tech){
//         super(name,roll)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am ${this._name} and I work on the Front-end!`)
//     }
// }

// class Back extends Contracter{
//     constructor(name,roll,tech){
//         super(name,roll)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am ${this._name} and I work on the Back-end!`)
//     }
// }

// let machi = new Front('The Machine','Front End', 'React')
// let simba = new Back('Simba','Back-end','Node')

// let agencyList = [machi, simba]

// for(person of agencyList){
//     person.sayHello()
// }



// NEW Practice

class Contractor{
    constructor(name, role, tech){
        this._name = name
        this._role = role
        this._tech = tech
    }
    get name(){
        return this._name
    }
    get role(){
        return this._role
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, my name is ${this._name} and I'm on the ${this._role} team!`)
    }   
}

class Front extends Contractor{
    constructor(name, role, tech){
        super(name,role,tech)
    }
    sayHello(){
        console.log(`Hello, I am ${this._name} and I work on the Front-end using ${this._tech}!`)
    }
}

class Back extends Contractor{
    constructor(name, role, tech){
        super(name,role,tech)
    }

    sayHello(){
        console.log(`Hello, I am ${this._name} and I work on the Back-end using ${this._tech}!`)
    }
}

let machi = new Front('The Machine', 'Front-end', 'React')
let simba = new Back('Simba','Back-end','Node')

let agencyList = [machi, simba]

for(person of agencyList){
    person.sayHello()
}