const express = require("express");
const rideRoutes = require("./routes/ride.routes");

const app = express();

app.use(express.json());
app.use("/api/ride", rideRoutes);

module.exports = app;
