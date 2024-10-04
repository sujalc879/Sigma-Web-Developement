// let obj = {
//     "a":"1", 
//     "b":"sujal"
// }

// console.log(obj);

// const animal = {
//     eats:true,
//     hate:false
// };
// const rabit = {
//     jumps:true
// };

// rabit.__proto__ = animal;
 

// console.log();

class animal {
    constructor(name) {
        this.name = name;
        console.log("The Object is Created");
    }

    eats() {
        console.log("Kha Rahaa Hoon Bhai");
        
    }

    jumps() {
        console.log("Koood Rahaa Hoon Bhai");
        
    }

}


class Lion extends animal {
    constructor(name) {
        super(name);
        console.log("The Object is Created");
    }

    eats() {
        super.eats()
        console.log("Kha Rahaa Hoon Bhai, I mean Brother.");
    }
}

let a = new animal("Kutta")
console.log(a);

let l = new Lion("King OF Jungle")
console.log(l);

// class employee {
//    sMethod() {
//     console.log("hii");
    
//   }
// }
// console.log(employee.sMethod());
