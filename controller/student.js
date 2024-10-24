import { Router } from "express";
import jwt from "jsonwebtoken";
import studentModel from "../model/student.js";

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

// router.use(authenticate)

router.get('/api/student', async (req, res) => {

    const studs = await studentModel.find({});

    res.send(studs)
    
})

router.get('/api/student/legal', async (req, res) => {

  const studs = await studentModel.find(
    {
      age: {
      $gt: 21,
      $lt: 71
    },
    city: "Chennai"
  });

  res.send(studs)
  
})

router.get('/api/student/average-age', async (req, res) => {

  // const studs = await studentModel.find({});

  // const totalAge = studs.reduce((acc, stud) => {
  //   acc = acc + stud.age;
  //   return acc;
  // }, 0)

  // const averageAge = Math.round(totalAge/studs.length);

  const studAggre = studentModel.aggregate([
    {
      $match: { city: "Hyderabad" }
    },
    {
      $group: { _id: null, averageAge: { $avg: "$age" } }
    }
  ])
  const studs = await studAggre.exec()
  console.log(studs);

  // res.status(200).send({averageAge: averageAge})
  res.send({averageAge: studs[0].averageAge})
  
})

router.get('/api/employee', (req, res, next) => {
    console.log("I am coming from Middleware");
    next();
}, (req, res)=>{

    res.send("Hello Employee");
})

router.post('/api/student', (req, res) => {
    try {
        
        const {name, age, isMarried, city} = req.body;

        const createdStudent = new studentModel({
          name,
          age,
          is_married: isMarried,
          city,
          created_at: new Date()
        });

        createdStudent.save();

        res.status(201).send({
            data: createdStudent,
            message: "User received  successfully"
        });
    } catch {
        res.status(500).send("Something went wrong!");
    }
})

export default router;