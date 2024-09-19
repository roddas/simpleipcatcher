import express, { Request, Response, NextFunction } from 'express';
import { config } from 'dotenv'

config();
const app = express();
const PORT =  Number(process.env.PORT);

app.get('/',( request : Request, response : Response, next : NextFunction) =>{
    response.json({message : request.ip});
});

app.listen(PORT,'0.0.0.0', ()=>{
    console.log(` The server is listening at ${PORT} .. `)
} )

