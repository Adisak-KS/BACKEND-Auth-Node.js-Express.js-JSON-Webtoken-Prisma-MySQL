// Step 1 Import Express
const express = require("express");
const app = express();


//Step 2 Start Server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});