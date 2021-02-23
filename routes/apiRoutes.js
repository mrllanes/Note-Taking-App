const noteData = require("../db/db.json");
const fs = require("fs");

module.exports = (app) => {
	app.get("/api/notes", (req, res) => res.json(noteData));

	app.post("/api/notes", (req, res) => {
		let note = req.body;
		noteData.push(note);
		fs.writeFileSync("../db/db.json", noteData);
	});
};
