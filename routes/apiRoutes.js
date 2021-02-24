const noteData = require("../db/db.json");
const fs = require("fs");
const util = require("util");
const uuid = require("uuid");
const writeFileAsync = util.promisify(fs.writeFile);

module.exports = (app) => {
	app.get("/api/notes", (req, res) => res.json(noteData));

	app.post("/api/notes", (req, res) => {
		let note = req.body;
		// figure out how to write an ID, add it to "note" then the push....
		// if I use UUID, need a second variable saying "let ID = UUID"
		// note.id = id
		noteData.push(note);
		writeFileAsync("./db/db.json", JSON.stringify(noteData))
			.then(() => {
				res.json(note);
			})
			.catch((err) => console.log(err));
	});
};
