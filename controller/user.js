import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

router.post('/api/login', (req, res) => {
    console.log(req.body);

    if(req.body.username === "ravinder@gmail.com" 
        && req.body.password === "Ravinder@135"){

            const jwtToken = jwt.sign({username: req.body.username}, "Avisit", { expiresIn: '45s' });

            res.status(200).send({
                message: `Successfully Logged In`,
                token: jwtToken 
            })
    } else {
        res.status(401).send("Please check your credentials")
    }

})

export default router;