// Basic Types
let id: number = 5
let company: string = "New Type Inc."
let isDone: boolean = true
let x: any = "Nice!"
let age: number

let ids: number[] = [1, 2, 3]
ids.push(4, 5)
let lists: any[] = []
lists.push(1, true, "Good")

console.log("ID:", ids)

// Tuple
let person: [number, string, boolean] = [1, "Guy", true]
// Tuple Array
let people: [number, string, boolean][]

people = [
    [1, "Guy", true],
    [2, "Guy", true],
    [3, "Guy", true]
]

// Union
let pid: string | number
pid = 24
pid = "24"

// Enum
enum Directions_1 {
    UP = 3,
    DOWN,
    LEFT,
    RIGHT
}

enum Directions_2 {
    UP = "Up",
    DOWN = "Down",
    LEFT = "Left",
    RIGHT = "Right"
}

console.log(Directions_2.DOWN)

// Objects
type User = {
    id: number,
    name: string,
}

const user: User = {
    id: 1,
    name: "John",
}

// Type Assertion
let cid: any = 1
let gid = <number>cid
let hid = cid as number

// Functions
function addNum(x: number, y: number): number {
    return x + y
}

function logOutput(msg: string | number): void {
    console.log(msg)
}
