const noteData = require("../db/db.json");
const fs = require("fs");
const util = require("util");
const { v4: uuid } = require("uuid");

module.exports = (app) => {
	app.get("/api/notes", (req, res) => res.json(noteData));

	app.post("/api/notes", (req, res) => {
		let note = req.body;
		console.log(note);
		// figure out how to write an ID, add it to "note" then the push....
		// if I use UUID, need a second variable saying "let ID = UUID"
		// note.id = id
		const createNote = ({ title, text }) => {
			return {
				id: uuid(),
				title,
				text,
			};
			console.log(createNote);
		};
		noteData.push(note);
		fs.writeFileSync("./db/db.json", JSON.stringify(noteData));
		res.json(noteData);
	});
};
