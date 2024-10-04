import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import studentRoutes from './controller/student.js';
import eventsRoutes from './controller/events.js';
import fileSystemRoutes from './controller/filesystem.js';

const app = express();
const PORT  = 3008;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(cors());

app.get('api/', (req, res) => {
    res.send("Helo there!")
})

app.use(studentRoutes);
app.use(eventsRoutes);
app.use(fileSystemRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})

