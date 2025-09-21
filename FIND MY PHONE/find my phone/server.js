const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

// Endpoint to receive commands from website
app.post("/command", (req, res) => {
  const { command } = req.body;
  console.log("Command received:", command);

  // Here you would send the command to the mobile app via Firebase, WebSocket, etc.
  res.json({ message: `Phone will ${command}` });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
