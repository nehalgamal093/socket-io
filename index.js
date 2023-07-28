import express from 'express'
import { noteModel } from './models/note.model.js';
import { dbConnection } from './database/dbConnection.js';
import {Server} from 'socket.io';

const app = express()
const port = 3000

app.get('/',(req,res) =>res.send('Hello world'));
dbConnection();

let server = app.listen(port,()=> console.log(`Example app listening on port ${port}`))
const io = new Server(server,{
    cors:"*"
});

io.on('connection',(socket) => {
console.log('a user connected')
console.log(socket.id)
socket.on('disconnect',()=>{
    console.log()
})
})