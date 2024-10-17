import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import studentRoutes from './controller/student.js';
import eventsRoutes from './controller/events.js';
import fileSystemRoutes from './controller/filesystem.js';
import userRoutes from './controller/user.js';
import multer from 'multer';

const app = express();
const PORT  = 3008;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(cors());

app.get('/api', (req, res, next) => {
    console.log("This is from middleware");
    next();

}, (req, res) => {
    res.send("Helo there!");

})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
  
const upload = multer({ storage });

app.post('/api/upload', upload.single('file'), (req, res) => {
    res.send(req.file)
})

app.use(studentRoutes);
app.use(eventsRoutes);
app.use(fileSystemRoutes);
app.use(userRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})

