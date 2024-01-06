require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors'); // Import the cors middleware
const multer = require('multer')
app.use(express.json());

// Enable CORS for all routes
app.use(cors());


const userRouter = require("./api/user/user.router");

app.use("/api/user", userRouter);

const medicineRouter = require("./api/medicines/medicines.router.js");

app.use("/api/medicine", medicineRouter);

const pharmacyRouter = require("./api/pharmacy/pharmacy_router.js");

app.use("/api/pharmacy", pharmacyRouter);

const stockMedicineRouter = require("./api/stockmedicines/stockmedicines.router.js");
app.use("/api/stockmedicine", stockMedicineRouter);


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    return cb(null, "./public/images")
  },
  filename: function (req, file, cb) {
    return cb(null, `${file.originalname}`)
  }
})

const upload = multer({storage})

app.post('/api/upload', upload.single('file'), (req, res) => {
})

app.use("/images", express.static("public/images"));
app.listen(process.env.APP_PORT,()=>{
    console.log("Server up and running on port : ", process.env.APP_PORT);
});