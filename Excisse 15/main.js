import fs from "fs/promises"
import fsn from "fs"
import path from "path"

let files = await fs.readdir("F:\\Learning Nodejs\\Excisse 15\\")
console.log(files)


let extension = []
for (const item of files) {
    let ext = item.split(".")[item.split(".").length-1]
    console.log(ext)
    if(fsn.existsSync()){}
    console.log(item)
    
}