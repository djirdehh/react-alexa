const http = require("http");
const express = require('express');
const app = express();

app.use('/public', express.static('./public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
})

const server = http.createServer(app);

server.listen(3000, () => {
	console.log('listening on Port 3000!');
});
