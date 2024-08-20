import express from "express";

const app = express();

// set the port where server will run
const PORT = process.env.PORT || 3000;

// endpoint for route "/api"
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the Goal Pad v2 app!" });
});

// log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
