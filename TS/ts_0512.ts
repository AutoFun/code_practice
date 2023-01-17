interface User {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
}

//Use type aliases to create more readable and reusable type definitions
//This can help you avoid repeating the same type definitions in multiple
//places
// and it can make your code more naintainable and easier to understand
type UserId=number;

function getUser(id:UserId): User | undefined {

}


// Typescript array practice

let numbers: number[]=[1,2,3,4,5];

// Print the array
console.log(numbers);

// Access an element in the array by its index
console.log(numbers[0]);

console.log(numbers.length);

// Use a for loop to iterate over the array
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

//Use the forEach() method to iterate over the array
numbers.forEach(function(number){
    console.log(number);
})

numbers.forEach((number)=>{
    console.log(number);
})

// Add an element to the end of the array
numbers.push(6);
console.log(numbers);

//Remove an element from the end of the array
numbers.pop();



// Create a class to represent a point in 2D space
class Point{
    x:number;
    y:number;

    constructor(x:number,y:number){
        this.x=x;
        this.y=y;
    }

    // Return the distance between this point and another point
    distanceTo(other: Point):number{
        let dx=other.x -this.x;
        let dy=other.y -this.y;
        return Math.sqrt(dx*dx+dy*dy);
    }
}

// Create an array of points
let points:Point[]=[
    new Point(0,0),
    new Point(1,1),
    new Point(2,2)
];

// Use a for loop to iteratie over the array
for (let i=0;i<points.length;i++){
    let point = points[i];
    console.log(`Point at ${point.x},${point.y}`);
}

// Use the map() method to transform the array
let distances:number[]=points.map(point=>point.distanceTo(new Point(0,0)));
console.log(distances);

let nearPoints: Point[]=points.filter(Point=>point.distanceTo(new Point(0,0))<2);
console.log(nearPoints);

// Use the reduce() method to combine the elements of the array
let totalDistance=distances.reduce((accumulator,distance)=>accumulator+distance,0);
console.log(totalDistance);


class Person{
    name: string;
    age: number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    toString():string {
        return `${this.name}(${this.age})`;
    }
}

let people:Person[]=[
    new Person('Alice',25),
    new Person('Bob',25),
    new Person('Daniel',22)
];

people.sort((a,b)=>a.name.localeCompare(b.name));
console.log(people);


let alice=people.find(person=>person.name==='Alice');


let bob=people.find(person=>person.age===25);
let bob=people.find(person=>person.age==="25");
let bob=people.find(person=>person.age==='25');
//This condition will always return 'false' since the types 'number' and 'string' have no overlap.
// Typescript has a better error handle

