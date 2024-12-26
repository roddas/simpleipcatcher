import express, { Request, Response, NextFunction } from 'express';
import { config } from 'dotenv'
import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware';

config();
const app = express();
const PORT = Number(process.env.PORT);

function createProxy(url: string) {
    return createProxyMiddleware<Request, Response>({
        target: url,
        changeOrigin: true,
    });
}

const redditProxy = createProxy('https://www.reddit.com');
const linkedinProxy = createProxy('https://www.linkedin.com');

app.use('/reddit', redditProxy);
app.use('/linkedin', linkedinProxy);


app.listen(PORT, '0.0.0.0', () => {
    console.log(` The server is listening at ${PORT} .. `)
});
