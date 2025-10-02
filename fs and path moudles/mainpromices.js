import fs from "fs/promises"

let a = await fs.readFile("shahbaz.txt");

// let b = await fs.writeFile("shahbaz.txt","Hey i am shahbaz")
let b = await fs.appendFile("shahbaz.txt","Hey i am shahbaz")

console.log(a.toString(),b)