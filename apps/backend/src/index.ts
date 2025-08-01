import express, { Request, Response } from 'express'
import { BACKEND_URL, Variable2 } from '@repo/types'

const app = express();


app.get('/', (req: Request, res: Response) => {
    res.json({msg:"'Hello World"});
});

app.listen(3003,()=>{
    console.log(`Server is running on ${BACKEND_URL}, ${Variable2}`);
});