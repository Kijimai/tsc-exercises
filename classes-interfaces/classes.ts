export abstract class Department {
  // By default, properties are public properties, accessible outside of the class instance
  // name: string
  // adding 'private' keyword makes this property only accessible inside the class itself
  // private employees: string[] = []
  // adding 'protected' keyword allows access to the base property that it is attached to with all instances of the base class
  protected employees: string[] = []
  static fiscalYear = new Date().getFullYear()

  constructor(protected readonly id: string, public name: string) {
    // this.name = name
  }

  // an abstract method can be defined if the class it belongs to is also abstract
  abstract describe(this: Department): void
  // console.log(`I am the ${this.name} department`)

  addEmployee(employee: string) {
    this.employees.push(employee)
  }
  addEmployees(newEmployees: string[]) {
    this.employees = this.employees.concat(newEmployees)
  }

  printEmployeeInformation(): void {
    console.log(this.employees.length + " total employees.")
    console.log(this.employees)
  }

  // not necessary to create a new instance of the class to invoke this method due to it being static
  static createEmployee(name: string) {
    return { name: name }
  }

  getInstance() {}
}

//Inherits the Base Department class with added features unique to itself
//Inherits everything including the constructor, you can however add a new construction to it.
class ITDepartment extends Department {
  admins: string[]
  constructor(id: string, admins: string[]) {
    // Super calls the constructor of the base class, super takes the arguments of the base parent class
    super(id, "IT")
    this.admins = admins
  }

  describe() {
    console.log("IT Department")
    console.log(`Admins in IT Department: ${this.admins}`)
  }
}

class ArtDepartment extends Department {
  private lastSubmittedPiece: string

  get mostRecentArtPiece() {
    if (this.lastSubmittedPiece) {
      return this.lastSubmittedPiece
    }
    throw new Error("No artpiece found.")
  }

  set mostRecentArtPiece(artPiece: string) {
    if (!artPiece) {
      throw new Error("Please input a valid piece for artwork!")
    }
    this.addPiece(artPiece)
  }

  constructor(id: string, private artPieces: string[]) {
    super(id, "Art")
    this.lastSubmittedPiece = artPieces[0]
  }

  describe() {
    console.log(`Art Department ID - ${this.id}`)
  }

  addPiece(artPiece: string) {
    this.artPieces.push(artPiece)
    this.lastSubmittedPiece = artPiece
  }
}

class AccountingDepartment extends Department {
  // The last added report into this class
  private lastReport: string
  private static instance: AccountingDepartment

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error("No report was found.")
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!")
    }
    this.addReport(value)
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting")
    this.lastReport = reports[0]
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return
    }
    this.employees.push(name)
  }

  addReport(text: string) {
    this.reports.push(text)
    this.lastReport = text
  }

  printReports() {
    console.log(this.reports)
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id)
  }

  static getInstance() {
    // Create an instance of AccountingDepartment, and only ONE instance
    // if it already exists, return the instance that exists
    if (AccountingDepartment.instance) {
      return this.instance
    }
    // Make a new instance if it doesnt exist yet
    this.instance = new AccountingDepartment("d2", [])
    return this.instance
  }
}

const it = new ITDepartment("It1", ["Me"])

//An example of a static method from the builtin Math Class
const twoSquared = Math.pow(2, 2)
console.log(twoSquared, ": twosquared")

it.addEmployee("Meep")
it.addEmployee("Marp")

// Because base classes that are described as abstract can no longer be instantiated -- They can only instantiate from inheriting classes
// The follow codes will no longer work properly
// const artDepartment = new Department("artId1", "Art1")
// const artDepartmentCopy = { describe: artDepartment.describe }
// artDepartment.describe() // 'I am the art Department'
// artDepartment.addEmployee("Ruan Jia")
// artDepartment.addEmployee("Craig Mullins")
// artDepartment.addEmployees(["Walt Disney", "Hayao Miyazaki"])
// artDepartment.addEmployees(["Tom Brady", "James Franco"])
// console.log(artDepartment)
// artDepartment.printEmployeeInformation()
// The 'this' context of type '{ describe: (this: Department) => void; }' is not assignable to method's 'this' of type 'Department'.
// Property 'name' is missing in type '{ describe: (this: Department) => void; }' but required in type 'Department'.ts(2684)
// console.log(artDepartmentCopy.describe()) // Undefined
// const newAccounting = new AccountingDepartment("121s", [
//   "Clear",
//   "Clear",
//   "Something went wrong...",
// ])

// newAccounting.printReports()
// newAccounting.addEmployee("Max") /// Shouldn't be added.
// newAccounting.addEmployee("Beepo")
// newAccounting.printEmployeeInformation()
// newAccounting.addReport("I will be the last report returned.")
// console.log(newAccounting.mostRecentReport)

// const anotherAccounting = new AccountingDepartment("1212", [])
// console.log(anotherAccounting.mostRecentReport) // Will generate error

//activating the setter method
// anotherAccounting.mostRecentReport = "" // Falsy, generate error
// anotherAccounting.mostRecentReport = "I am a valid value"
// console.log(anotherAccounting.mostRecentReport)

const departmentEmployee = Department.createEmployee("Steve Jobs") // returns an object with a 'name' key and a value of "Steve Jobs"
console.log(departmentEmployee)
console.log(Department.fiscalYear)
// newAccounting.describe() //Accounting Department - ID: 121s
it.describe()

const newArtDepartment = new ArtDepartment("4zee1az", [
  "The Mona Lisa",
  "Dickbutt",
])
newArtDepartment.addEmployee("MichaelAngelo")
console.log(newArtDepartment.printEmployeeInformation())
newArtDepartment.describe()

const exactlyOneAccount = AccountingDepartment.getInstance()
console.log(exactlyOneAccount)
