const express = require("express");
const router = express.Router();
const Location = require("./locationModel");

router.get("/locations", (req, res) => {
  Location.find({}).then((data) => {
    res.json(data);
  });
});


router.post("/save", (req, res) => {
  const dataToSave = req.body;
  const newLocationToSave = new Location(dataToSave);
  newLocationToSave.save((err) => {
    if (err) {
      res.status(500).json({ Message: "Error on Save" });
    } else {
      res.json({ Message: "Data Has Been Saved!" });
    }
  });
});


module.exports = router;
