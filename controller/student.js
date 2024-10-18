import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

const authenticate = (req, res, next) => {
    const token = req.headers.token
  
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    try {
      const decoded = jwt.verify(token, "Avisit");
    //   req.username = decoded.username;
      next();
    } catch (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
};

router.use(authenticate)

router.get('/api/student', (req, res) => {

    const students = ["Abilash", "Prasad", "Gopinath"];
    res.send(students)
    
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