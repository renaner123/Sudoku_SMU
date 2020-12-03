import {Board} from "./Board";

const express = require('express'), bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
app.use(bodyParser.json());


const clientsBoards = {}
app.use(cors());

app.get("/teste", (req, res) => res.status(200).send("testado"))

/**
 * body={
 *     dificulty: number (0 a 4)
 *     clientId: algumaCoisaAleatoriaSeiLa
 * }
 *
 * response={gameBoard: number[][]}
 */
app.post("/startNewGame", async (req, res) => {
    let board = new Board(req.body.dificulty);
    // armazena o q eh enviado e a resolucao
    clientsBoards[req.body.clientId] = {
        gameBoard: board.getGameBoard(),
        solved: board.board
    }
    res.status(200).send({gameBoard: clientsBoards[req.body.clientId].gameBoard});

});

/**
 * body{
 *     solved: number[][]
 *     clientId: seiLaManin
 * }
 *
 * resp={win: boolean}
 */
app.post("/checkSolution", async (req, res) => {
    let winResult = JSON.stringify(req.body.solved) == JSON.stringify(clientsBoards[req.body.clientId].solved);
    if (winResult)
        delete clientsBoards[req.body.clientId]
    res.status(200).send({
        win: winResult
    });
})


const server = app.listen(42069, '0.0.0.0');
console.log("Server is running! :D")
