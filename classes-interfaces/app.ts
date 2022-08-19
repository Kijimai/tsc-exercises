// interfaces only exist in Typescript
// Describe the structure of an object, what it looks like etc., can also be used to define the structure of a function
// Why do we need this? vs a custom Type?

// What a custom Type looks like for reminder:
// Whilst they are used interchangeably, interfaces are more clearer whereas custom types are more flexible in comparison
// You can implement an interface IN a class just like a custom type.
// An interface can be used as a contract, a class can implement and a class has to adhere to.

// type Person = {
//   readonly name: string,
//   age: number,
//   greet(phrase: string) : void
// }

// let user1: Person

// user1 = {
//   name: "James Howlett",
//   age: 121,
//   greet(phrase: string) {
//     console.log(`$phrase}, how you doin' bub? I'm ${this.name}.`)
//   }
// }
// user1.greet('Hey bub.')
// type Function
// type AddFn = (a: number, b: number) => number;
// const add: AddFn = (n1: number, n2: number) => {
//   return n1 + n2
// }
// console.log(add(1, 2))

//interface version
interface AddFn {
  // Looks like an anonymous function: It needs to declare its parameters with what type they are, and separated with a colon: the return type
  (a: number, b: number) : number
}

const add: AddFn = (n1: number, n2: number) => {
  return n1 + n2
}

interface Named {
  readonly name?: string
  optionalProperty?: string //optional property -- think nullable.
}

interface Greetable extends Named{
  // age: number

  // Describe the method without functionality, just what it looks like
  greet(phrase: string): void

  fart(): void
}

interface AnotherInterface {
  // filler here -- just to show that a class can accept multiple Interfaces
}


// can implement multiple interfaces
class Person implements Greetable, AnotherInterface {
  name?: string
  age?: number

  constructor(name: string, age?: number) {
    this.name = name
    this.age = age
  }

  greet(phrase: string) {
    console.log(`${phrase} I am ${this.name}!`)
  }

  fart() {
    console.log("Bffppppt")
  }
}

let user1: Greetable

// This wont work anymore with interfaces, you have to instantiate a new object with the new keyword now
// user1 = {
//   name: "James Howlett",
//   age: 121,
//   greet(phrase: string) {
//     console.log(`${phrase} I am ${this.name}!`)
//   },
// }
user1 = new Person("James Howlett", 121)

user1.greet("What's up!")
user1.fart()

class Pig implements Greetable {
  constructor(public name: string, public age: number) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log("UEWWWWEEEEEEEEEEEEEEEE")
  }

  fart() {
    console.log("Piggu fart.")
  }
}

const babe: Pig = new Pig("Babe", 1)
babe.fart()
babe.greet()
// babe.name = "asdasdad" // works
// console.log(babe.name)
// user1.name = "asdasdasd" // readonly, cant reassign

// Why have interfaces?
// It forces the existence of certain methods you want other classes to inherit as well and every class has to add its own implementation of that method
