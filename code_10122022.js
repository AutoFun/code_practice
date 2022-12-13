// ES6 class method
class Person{
    constructor(first,last,age,gender,interests){
        this.name={
            first,
            last
        };
        this.age=age;
        this.gender=gender;
        this.interests=interests;
    }

    greeting(){
        console.log(`Hi!I'm${this.name.first}`);
    };

    farewell(){
        console.log(`${this.name.first}has left the building. Bye for now!`)
    };
}


let han =new Person('Han','Solo',25,'male',['Smuggling']);
han.greeting();

let leia =new Person('Han','Solo',25,'male',['Smuggling']);
leia.farewell();


// in ES6, class is just Syntactic sugar


// class Teacher extends Person {
//     constructor(first,last,age,gender,interests,subject,grade){
//         super(first,last,age,gender,interests); // Now 'this' is initialized by calling the parent constructor
//         this.subject=subject;
//         this.grade=grade;
//     }
// }



// let snape= new Teacher('Severus','Snape',58,'male',['Potions'],'Dark arts',5);
// snape.greeting();
// snape.farewell();
// snape.age;
// snape.subject;





class Teacher extends Person {
    constructor(first, last,age, gender,interests,subjects,grade){
        super(first,last,age,gender,interests);
        this._subjects=subjects;
        this.grade=grade;
    }

    get subject(){
        return this._subject;
    }

    set subject(newSubject){
        this._subject=newSubject;
    }
}

let snape= new Teacher('Severus','Snape',58,'male',['Potions'],'Dark arts',5);

//check the default value
console.log(snape.subject)

snape.subject="Balloon animas" // Sets _subject to "Balloon animals"

console.log(snape.subject)



// in ES6, because i have java experience, we see the class and extends
// and also the super(), getter, setter method which are used in java bean object.

