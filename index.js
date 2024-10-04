import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT  = 3008;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(cors());

app.get('api/', (req, res) => {
    res.send("Helo there!")
})

app.get('/api/student', (req, res) => {
    console.log(req.query);

    res.send(`Hello from ${req.query.name}`)
})

app.post('/api/student/:id', (req, res) => {
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

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})




// app.get('/api/callback-queue', (req, res) => {
    
//     console.log("Start");
//     setImmediate(() => {console.log("I am Immediate")})
//     setTimeout(() => {console.log("I am Timeout")}, 0);
//     process.nextTick(() => {console.log("I am next tick");})
//     Promise.resolve().then(() => {console.log("I am promise");})
//     console.log("End");
// })