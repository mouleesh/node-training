import { Router } from "express";

const rou = Router();

rou.get('/api/student', (req, res) => {
    console.log(req.query);

    res.send(`Hello from ${req.query.name}`)
})

rou.post('/api/student/:id', (req, res) => {
    try {
        console.log(req.body);
        console.log(req.params.id);
    
        res.status(201).send({
            data: [],
            message: "User received  successfully"
        });
    } catch {
        res.status(500).send("Something went wrong!");
    }
})

export default rou;