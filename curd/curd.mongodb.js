use("CURDdb")

db.createCollection("corces")

db.corces.insertOne({
    name: "Shahbaz",
    price: 0,
    assigment: 12,
    project: 4
})
db.corces.insertMany([
    {
    name: "Ayesha",
    price: 10,
    assignment: 8,
    project: 3
},
{
    name: "Bilal",
    price: 5,
    assignment: 10,
    project: 2
},
{
    name: "Hina",
    price: 0,
    assignment: 9,
    project: 4
},
{
    name: "Danish",
    price: 12,
    assignment: 11,
    project: 5
},
{
    name: "Sara",
    price: 7,
    assignment: 6,
    project: 3
},
{
    name: "Usman",
    price: 3,
    assignment: 10,
    project: 1
},
{
    name: "Kiran",
    price: 9,
    assignment: 12,
    project: 5
},
{
    name: "Hamza",
    price: 4,
    assignment: 8,
    project: 2
},
{
    name: "Laiba",
    price: 11,
    assignment: 7,
    project: 4
},
{
    name: "Zain",
    price: 6,
    assignment: 9,
    project: 3
}

])

let a = db.corces.find({price: 0})

console.log(a.toArray())