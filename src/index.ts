import express, { Request, Response, NextFunction }  from "express";
import usersRoute from "./routes/user.route";
const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(usersRoute)
app.get("/status", (req: Request, res: Response, next : NextFunction) => {
    res.status(200).send({foo: "bar!"})
})

app.listen(3000, () => {
    console.log("Aplicação Inicializada na porta 3000")
})