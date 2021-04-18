"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var Board_1 = require("./Board");
var express = require('express'), bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var path = require('path');
app.use(bodyParser.json());
var listUri = [];
var clientsBoards = {};
app.use(cors());
app.use(express.static(path.join(__dirname, '../')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/user1', function (req, res) {
    res.sendFile('user1.html', { root: path.join(__dirname, '../frontend', 'html') });
});
app.get('/user2', function (req, res) {
    res.sendFile('user2.html', { root: path.join(__dirname, '../frontend', 'html') });
});
// @ts-ignore
app.get("/teste", function (req, res) { return res.status(200).send("testado"); });
/**
 * body={
 *     dificulty: number (0 a 4)
 *     clientId: algumaCoisaAleatoriaSeiLa
 * }
 *
 * response={gameBoard: number[][]}
 */
app.post("/startNewGame", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var board;
    return __generator(this, function (_a) {
        board = new Board_1.Board(req.body.dificulty);
        // armazena o q eh enviado e a resolucao
        // @ts-ignore
        clientsBoards[req.body.clientId] = {
            gameBoard: board.getGameBoard(),
            solved: board.board
        };
        // @ts-ignore
        res.status(200).send({ gameBoard: clientsBoards[req.body.clientId].gameBoard });
        return [2 /*return*/];
    });
}); });
app.post("/checkSolution", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var winResult;
    return __generator(this, function (_a) {
        winResult = JSON.stringify(req.body.solved) == JSON.stringify(clientsBoards[req.body.clientId].solved);
        if (winResult) { // @ts-ignore
            // @ts-ignore
            delete clientsBoards[req.body.clientId];
        }
        res.status(200).send({
            win: winResult
        });
        return [2 /*return*/];
    });
}); });
app.post("/listUri", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log(req.body.uri);
        if (listUri.indexOf(req.body.uri) == -1) {
            listUri.push(req.body.uri);
        }
        // @ts-ignore
        res.status(200).send(JSON.stringify(listUri));
        return [2 /*return*/];
    });
}); });
var server = app.listen(42069, '0.0.0.0');
console.log("Server is running! :D");
