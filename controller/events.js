import { Router } from "express";

const router  = Router();

router.get("/api/event-loop", (req, res) => {
    
    console.log("Start");

    //This goes to the Macro Tasl Queue
    setTimeout(() => {console.log("I am Timeout")}, 0);
    setImmediate(() => {console.log("I am Immediate")});

    //This goes to Micro Task Queue
    Promise.resolve().then(() => {console.log("I am promise");});
    process.nextTick(() => {console.log("I am next tick")});

    console.log("End");
    
    res.send("Working!!!")
});

export default router;