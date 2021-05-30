const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

module.exports = (app) => {

  app.get('/api/notes', (req, res) => {
    let noteInfo = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    res.json(noteInfo);
  });

  app.get('/api/notes/:id', (req, res) => {
    let noteInfo = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    const optionChosen = req.params.id;
    console.log(optionChosen);
    for (let i = 0; i < noteInfo.length; i++) {
      if (optionChosen === noteInfo[i].id) {
        return res.json(noteInfo[i]);
      }
    }
    return res.json(false);
  });

  app.post('/api/notes', (req, res) => {
    let noteInfo = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let notePost = req.body;
    let id = uuidv4();
    notePost.id = id;
    noteInfo.push(newNote);
    fs.writeFile("db/db.json", JSON.stringify(noteInfo, '\t'), err => {
      if (err) throw err;
      return true;
    });
    res.json(true);
  });
  
  };
