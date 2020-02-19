var noteData = require("../db/db.json");
path = require("path")

console.log(noteData);
module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(noteData);
    });

    app.post("/api/notes", function (req, res) {
        noteData.push(req.body);
        res.json(true);
    });

    app.delete("/api/notes/:id", function (req, res) {
        var id = req.params.id;

        for (let i = 0; i < noteData.length; i++) {
            if (id === noteData[i].id) {
                noteData.splice(i, 1);
            }
        }
        for (let e = 0; e < noteData.length; e++) {
            noteData[e].id = e.toString();
        }
        res.json({ ok: true });
    });
}