// Task 1
console.log('HELLO WORLD');


// Task 2
import express from "express"
import dotenv from "dotenv"

dotenv.config()
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Hello Node!!!!</h1>\n');

})

const PORT = process.env.PORT

app.listen(PORT, (err) =>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})

//  Task 3
import { writeFile } from 'fs'
import { readFile } from "fs"

writeFile("welcome.txt", "Hello Node", (err) =>{
    err ? console.log(err) : console.log("file created successfully");
    
})

readFile("welcome.txt", (err, data) => {
    err ? console.log(err) : console.log(data.toString());
    ;
    
})