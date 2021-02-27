const noteData = require("../db/db.json");
const fs = require("fs");
const util = require("util");
const { v4: uuid } = require("uuid");

module.exports = (app) => {
	app.get("/api/notes", (req, res) => res.json(noteData));

	app.post("/api/notes", (req, res) => {
		let note = req.body;
		// figure out how to write an ID, add it to "note" then the push....
		// if I use UUID, need a second variable saying "let ID = UUID"
		// note.id = id
		let id = uuid();
		note.id = id;
		console.log(note);

		noteData.push(note);
		fs.writeFileSync("./db/db.json", JSON.stringify(noteData));
		res.json(noteData);
	});

	app.delete("/api/notes/:id", (req, res) => {
		let deleteNote = req.params.id;
		fs.readFile("./db/db.json", (err, data) => {
			if (err) throw err;
			let notes = JSON.parse(data);
			const filteredNotes = notes.filter(
				(note) => note.id !== deleteNote
			);
			noteData.push(filteredNotes);
			fs.writeFileSync("./db/db.json", JSON.stringify(noteData));
			res.json(noteData);
		});
	});
};
