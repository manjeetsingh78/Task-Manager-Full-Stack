// import dependencies

/*
const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

require("dotenv").config(); // ✅ Automatically loads ./server/.env

const employeeRouter = require("./routes/employee.route")


// connect to MongoDB



// initialize app

const app = express();

app.use(cors(
  {
    origin: "http://localhost:5173",
    credentials: true
  }))


app.use(express.json()); // ✅ parse JSON


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error Connecting to DB:", err));



app.use("/", employeeRouter)

// test route
// app.get("/test", (req, res) => {
//   res.send("<h1>Backend for Task Manager APP</h1>");
// });

// start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});

*/


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const employeeRouter = require("./routes/employee.route");
const taskRouter  = require("./routes/task.routes")

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("MongoDB Error:", err));

app.use("/", employeeRouter);
app.use("/",taskRouter);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

