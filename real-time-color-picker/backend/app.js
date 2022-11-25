import express from 'express';
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const http = createServer(app);
const io = new Server(http);


import cors from 'cors';

app.use(cors());

app.get("/", (req, res) => {
	res.send("hello");
});

let lastColor = "#282c34";

io.on("connection", (socket) => {
	console.log("bir kullanıcı bağlandı!");

	socket.emit("receive", lastColor); // Creates events to send data.(if in backend send to client, if in client send to backend)

	socket.on("newColor", (color) => { // listens for specific events to collect data
		console.log(color);

		lastColor = color;
		io.emit("receive", color);
	});

	socket.on("disconnect", () => { // listens for specific events to collect data
		console.log("Bir kullanıcı ayrıldı.");
	});
});

http.listen(3001, () => console.log("Server is up 🚀 🚀"));