// Dependencies
const path = require("path");

// HTML routes to compliment the server.js file
// Written directly into module.export
module.exports = (app) => {
	app.get("/notes", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/notes.html"));
	});

	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});
};
