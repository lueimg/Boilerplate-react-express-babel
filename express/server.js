import express from 'express';

let app = express();

app.use(express.static(__dirname +'/../public'));

app.listen(3000);