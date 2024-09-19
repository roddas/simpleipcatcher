import express, { Request, Response, NextFunction } from 'express';
import { config } from 'dotenv'

config();
const app = express();
const PORT =  Number(process.env.PORT);
app.set('trust proxy', true);

let tmp : string | undefined = '';

app.get('/checkpoint',( request : Request, response : Response, next : NextFunction) =>{
    const {ip} = request;
    tmp = ip;
    response.send();
});

app.get('/',( request : Request, response : Response, next : NextFunction) =>{
    response.send(tmp);
});

app.listen(PORT,'0.0.0.0', ()=>{
    console.log(` The server is listening at ${PORT} .. `)
} )

