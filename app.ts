import express, { Request, Response, NextFunction } from 'express';
import { config } from 'dotenv'

config();
const app = express();
const PORT =  Number(process.env.PORT);
app.set('trust proxy', true);

app.get('/',( request : Request, response : Response, next : NextFunction) =>{
    response.send(request.ip);
});

app.listen(PORT,'0.0.0.0', ()=>{
    console.log(` The server is listening at ${PORT} .. `)
} )

