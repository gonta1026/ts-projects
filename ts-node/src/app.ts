import express, { Request, Response, NextFunction } from "express";


interface MesageRequest extends Request {
  body: {
    message: number
  }
}
const app = express();
app.use(express.json());

app.post("/", (req: MesageRequest, res: Response, next: NextFunction): void => {
  console.log(req.body.message)
  res.send(`<h1>I got ${req.body.message}</h1>`);
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

});
app.listen(3000);

