import express, { Request, Response } from 'express'

const app = express();


app.get('/', (req: Request, res: Response) => {
    res.json({msg:"'Hello World"});
});

app.listen(3003);