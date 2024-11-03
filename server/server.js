// Step 1 Import Express
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const {readdirSync} = require("fs");
const cors = require("cors");


// import Router
// const authRouter = require("./routers/auth");
// const userRouter = require("./routers/user");


// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());


// Step 3 Route
readdirSync("./routers").map((item)=> app.use("/api", require(`./routers/${item}`)));
// app.use('/api', authRouter);
// app.use('/api', userRouter);


// Step 2 Start Server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});