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

console.log(Direction1)

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction2)

// Object

type User = {
    id: number,
    name: string
} 

const user: User = {
    id: 1,
    name: 'Dimitrov'
}