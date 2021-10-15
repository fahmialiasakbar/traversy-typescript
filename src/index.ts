let id: number = 5
let company: string = 'Dinata'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1,2,3,4]

let arr: any[] = ['Man', 2, false]

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true]

// Tupple Array
let employees: [number, string][]

employees = [
    [1, 'Maia'],
    [2, 'Nikita'],
    [3, 'Brad']
]

// Union
let pid: string | number
pid = 22
pid = '22'

// Enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

// console.log(Direction1)

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

// console.log(Direction2)

// Object
type User = {
    id: number,
    name: string
} 

const user: User = {
    id: 1,
    name: 'Dimitrov'
}

// Type Assertion
let cid: any = 'ano'
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number {
    return x + y
}
// console.log(addNum(1, 3))

function log(message: number | string): void {
    // console.log(message)
}
log("Horn")
log(6)

// Interfaces
interface UserInterface {
    readonly id: number
    name: string
    age?: number
} 

const user1: UserInterface = {
    id: 1,
    name: 'Dimitrov'
}

// Function Interface
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x:number, y:number): number => x + y
const sub: MathFunc = (x:number, y:number): number => x - y

// Classes
class Person {
    id: number
    name: string
    
    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registering`
    }
}

const jack = new Person(1, 'Jack Sparrow')
const pat = new Person(2, 'Pat Mahomes')

// console.log(jack.register())

// Implementation Interfaces in class
interface StudentInterface {
    id: number
    name: string
    register(): string
} 
 
class Student implements StudentInterface {
    id: number
    name: string
    
    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `Register on ${this.name} success`
    }
}

const jane = new Student(1, "Jane Dinata")
// console.log(jane.register())

// Extending Classes (Subclasses)
class Assistant extends Student {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const mick = new Assistant(3, "Mike Doohan", "laboran")
// console.log(mick.register())
