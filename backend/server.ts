import {Board} from "./Board";

const express = require('express'), bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
app.use(bodyParser.json());


const clientsBoards = {}
app.use(cors());

// @ts-ignore
app.get("/teste", (req, res) => res.status(200).send("testado"))

app.post("/startNewGame", async (req: { body: { dificulty: number | undefined; clientId: string | number; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { gameBoard: any; }): void; new(): any; }; }; }) => {
    let board = new Board(req.body.dificulty);
    // armazena o q eh enviado e a resolucao
    // @ts-ignore
    clientsBoards[req.body.clientId] = {
        gameBoard: board.getGameBoard(),
        solved: board.board
    }
    // @ts-ignore
    res.status(200).send({gameBoard: clientsBoards[req.body.clientId].gameBoard});

});

app.post("/checkSolution", async (req: { body: { solved: any; clientId: string | number; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { win: boolean; }): void; new(): any; }; }; }) => {
    // @ts-ignore
    let winResult = JSON.stringify(req.body.solved) == JSON.stringify(clientsBoards[req.body.clientId].solved);
    if (winResult) { // @ts-ignore
        // @ts-ignore
        delete clientsBoards[req.body.clientId]
    }
    res.status(200).send({
        win: winResult
    });
})


const server = app.listen(42069, '0.0.0.0');
console.log("Server is running! :D")
