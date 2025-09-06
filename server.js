import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import  sequelize  from './config/db.js'
import authRoute from './routes/auth.route.js'
import patientRoutes from './routes/patient.route.js';
import doctorRoutes from './routes/doctor.route.js';
import mappingRoutes from './routes/mapping.route.js';

dotenv.config()

const app=express();
app.use(express.json());

connectDB();

sequelize.sync({ alter: true })
    .then(() => {
        console.log("Database synced successfully");
    })
    .catch((err) => {
        console.error("Error syncing database:", err);
    });

app.get('/test',(req,res)=>{
    res.send("This is test endpoint!")
});

app.use('/api/auth',authRoute);
app.use("/api/patients", patientRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/mappings", mappingRoutes);

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Your server is running on port: http://localhost:${port}`)
})