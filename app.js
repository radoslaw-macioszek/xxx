// const http = require("http");
// const handler = (request, response) => {
// 	console.log("sample message");
// 	response.end("jakis teskt");
// };
// const server = http.createServer(handler);
// const port = 3000;
// server.listen(port, () => {
// 	console.log(`Serwer dziala na porcie ${port}`);
// });

const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "hbs");
app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use("/js", express.static(path.join(__dirname, "./js")));
app.get("/", function (req, res) {
	res.render("index", {
		pageTitle: "tytul strony",
	});
});
app.get("/podstrona", function (req, res) {
	res.send("podstrona");
});
app.listen(port, () => {
	console.log(`serwer dziala na porcie ${port}`);
});
