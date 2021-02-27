const noteData = require("../db/db.json");
const fs = require("fs");
// const util = require("util");
const { v4: uuid } = require("uuid");

module.exports = (app) => {
	app.get("/api/notes", (req, res) => res.json(noteData));

	app.post("/api/notes", (req, res) => {
		let note = req.body;
		let id = uuid();
		note.id = id;
		console.log(note);

		noteData.push(note);
		fs.writeFileSync("./db/db.json", JSON.stringify(noteData));
		res.json(noteData);
	});

	app.delete("/api/notes/:id", (req, res) => {
		let deleteNote = req.params.id;
		const filteredNotes = noteData.filter((note) => note.id !== deleteNote);
		console.log(noteData);
		noteData.length = 0;
		noteData.push(...filteredNotes);
		fs.writeFileSync("./db/db.json", JSON.stringify(filteredNotes));
		res.json(filteredNotes);
	});
};
