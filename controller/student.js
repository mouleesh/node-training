import { Router } from "express";

const router = Router();


router.get('/api/student', (req, res) => {
    if(req.headers.token === "ajysdghbfaksjb"){
        const students = ["Abilash", "Prasad", "Gopinath"];
        res.send(students)
    } else {
        res.status(401).send("Unauthorized User")
    }
})

router.get('/api/employee', (req, res, next) => {
    console.log("I am coming from Middleware");
    next();
}, (req, res)=>{

    res.send("Hello Employee");
})

router.post('/api/student/:id', (req, res) => {
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

export default router;