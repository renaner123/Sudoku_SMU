import {Board} from "./Board";


const express = require('express'), bodyParser = require('body-parser');
const path = require('path')
const cors = require('cors')
const app = express();
app.use(bodyParser.json());

var listUri = [];

const clientsBoards = {}
app.use(cors());

app.use(express.static(path.join(__dirname, '../')))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});


// @ts-ignore
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

// app.post("/listUri", async (req, res) => {
//     console.log(req.body.uri);
//     if(listUri.indexOf(req.body.uri) == -1){
//         listUri.push(req.body.uri)
//     }
//     // @ts-ignore
//     res.status(200).send(JSON.stringify(listUri));
// });


var porta = process.env.PORT || 8080;
app.listen(porta);

