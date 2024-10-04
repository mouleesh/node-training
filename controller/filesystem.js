import { Router } from "express";
import fs from "fs";

const rou = Router();

rou.get("/api/file-system", (req, res) => {
    

    // fs.writeFile("sample.txt", req.query.content, (err) => {
    //     if(!err){
    //         console.log("File Created Successfully!");
    //     }
    // })

    // fs.readFile("sample.txt", (err, data) => {
    //     if(!err){
    //         console.log(data.toString());
    //     } else {
    //         console.log(err);
    //     }
    // })

    fs.writeFileSync("sample.txt", req.query.content);

    const data = fs.readFileSync("sample.txt");
    
    console.log(data.toString());

    fs.renameSync("sample.txt", "example.txt")
    
})

export default rou;