require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors'); // Import the cors middleware
app.use(express.json());

// Enable CORS for all routes
app.use(cors());


const userRouter = require("./api/user/user.router");

app.use("/api/user", userRouter);

const medicineRouter = require("./api/medicines/medicines.router.js");

app.use("/api/medicine", medicineRouter);

const pharmacyRouter = require("./api/pharmacy/pharmacy_router.js");

app.use("/api/pharmacy", pharmacyRouter);

app.listen(process.env.APP_PORT,()=>{
    console.log("Server up and running on port : ", process.env.APP_PORT);
});