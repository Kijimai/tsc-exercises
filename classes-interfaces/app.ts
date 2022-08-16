class Department {
  name: string
  employees: string[] = []

  constructor(n: string) {
    this.name = n
  }

  describe(this: Department) {
    console.log(`I am the ${this.name} department`)
  }
}

const artDepartment = new Department("Art")
const artDepartmentCopy = { describe: artDepartment.describe }
artDepartment.describe() // 'I am the art Department'

// The 'this' context of type '{ describe: (this: Department) => void; }' is not assignable to method's 'this' of type 'Department'.
// Property 'name' is missing in type '{ describe: (this: Department) => void; }' but required in type 'Department'.ts(2684)
// console.log(artDepartmentCopy.describe()) // Undefined
