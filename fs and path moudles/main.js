const { error } = require("console");
const fs = require("fs")

console.log(fs)

console.log("Starting");

// fs.writeFileSync("shahbaz.txt","Shahbaz is a good boy")
fs.writeFile("shahbaz2.txt","Shahbaz is a good boy",()=>{
    console.log("File is done now")
    fs.readFile("shahbaz2.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})

fs.appendFile("shahbaz.txt","ShahbazzRobo",(e,d)=>{
    console.log(d)
})

console.log("Ending")