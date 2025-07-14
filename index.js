import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserRoute from './routes/UserRoute.js'; // import the user route

const app = express();      // object of express

// mongoDB connection
mongoose.connect("mongodb://localhost:27017/",
    {
        useNewUrlParser: true,      // to avoid deprecation warnings, use the new URL string parser, pass this option as true to the MongoClient constructor so that mongoose can understand the new connection string format.
        useUnifiedTopology: true,// to avoid deprecation warnings, to use the new server discover and monitoring engine, pass this option as true to the MongoClient constructor.
    }
);

// end
const db = mongoose.connection;
db.on('error', (error) => console.error(error)); // if there is an error in the connection
db.once('open', ()=> console.log('Connected to Database')); // if the connection is successful 

app.use(cors()); // to allow cross-origin requests
app.use(express.json()); // to parse JSON data in the request body
app.use(UserRoute); // use the user route

app.listen(5000, ()=> console.log('Server Started')); // to start the server on port 5000