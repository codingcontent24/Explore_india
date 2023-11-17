dotenv.config()
import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import tourRoute from './routers/tours.js';
import userRoute from './routers/users.js';
import authRoute from './routers/auth.js';
import reviewRouter from './routers/reviews.js'
import bookingRouter from './routers/bookings.js';
dotenv.config({ path: './config.env' });


const app = express();
const port = process.env.PORT || 8000;
const corsOptions ={
    origin:true,
    credentials:true
}
// Database connection

const connect =async()=>{
    try{
        await mongoose.connect(process.env.DATABASE,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('MongoDB database connected')
    }
    catch(err)
    {
        console.log(err)
      console.log('MongoDB database connection is failed');
    }
}

app.get('/', (req, res) => {
    res.send('api is working');
});

// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use('/api/v1/auth',authRoute);
app.use('/api/v1/tours',tourRoute);
app.use('/api/v1/user',userRoute);
app.use('/api/v1/review',reviewRouter);
app.use('/api/v1/booking',bookingRouter);

app.listen(port, () => {
   connect();
    console.log('server listening on port', port)
})
