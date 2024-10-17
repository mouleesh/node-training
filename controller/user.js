import { Router } from "express";

const router = Router();

router.post('/api/login', (req, res) => {
    console.log(req.body);

    if(req.body.username === "ravinder@gmail.com" 
        && req.body.password === "Ravinder@135"){
            res.status(200).send({
                message: `Successfully Logged In`,
                token: "ajysdghbfaksjb" 
            })
    } else {
        res.status(401).send("Please check your credentials")
    }

})

export default router;