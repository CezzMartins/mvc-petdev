import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

dotenv.config();


const server = express();
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views')); // setup folder for view templates
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public'))); //set up static folde 

//Routes



server.listen(process.env.PORT, () => {
    console.log('Server is ON!!')
})

