const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.put("/authenticate", async (req, res) => {
  const { username, secret} = req.body;

  // Store a user-copy on Chat Engine!
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: secret },
      { headers: { "Private-Key": "bb2e7e13-5b41-498d-a8ce-9e9b3ef0f485" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});



app.listen(3001);