"use strict";
exports.__esModule = true;
var BASE_MATRIX = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [2, 3, 1, 5, 6, 4, 8, 9, 7],
    [5, 6, 4, 8, 9, 7, 2, 3, 1],
    [8, 9, 7, 2, 3, 1, 5, 6, 4],
    [3, 1, 2, 6, 4, 5, 9, 7, 8],
    [6, 4, 5, 9, 7, 8, 3, 1, 2],
    [9, 7, 8, 3, 1, 2, 6, 4, 5]
];
var ZONA_INDEX = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
var DificultyLevel;
(function (DificultyLevel) {
    DificultyLevel[DificultyLevel["EASY"] = 0] = "EASY";
    DificultyLevel[DificultyLevel["MEDIUM"] = 1] = "MEDIUM";
    DificultyLevel[DificultyLevel["HARD"] = 2] = "HARD";
    DificultyLevel[DificultyLevel["ASIAN"] = 3] = "ASIAN";
})(DificultyLevel || (DificultyLevel = {}));
var Board = /** @class */ (function () {
    function Board(dificulty) {
        if (dificulty === void 0) { dificulty = DificultyLevel.EASY; }
        var _this = this;
        this.board = [];
        ZONA_INDEX.forEach(function (zone) {
            zone.sort(function () { return .5 - Math.random(); });
            zone.forEach(function (i) { return _this.board.push(BASE_MATRIX[i]); });
        });
        if (dificulty === DificultyLevel.EASY)
            this.dificulty = { min: 2, max: 3 };
        if (dificulty === DificultyLevel.MEDIUM)
            this.dificulty = { min: 3, max: 5 };
        if (dificulty === DificultyLevel.HARD)
            this.dificulty = { min: 5, max: 7 };
        if (dificulty === DificultyLevel.ASIAN)
            this.dificulty = { min: 6, max: 8 };
    }
    Board.prototype.getGameBoard = function () {
        var _this = this;
        var lineIndex = 0;
        var board = JSON.parse(JSON.stringify(this.board));
        // @ts-ignore
        board.forEach(function (line) {
            var nToDelete = Math.floor(Math.random() * _this.dificulty.min) + _this.dificulty.max; // numero de elementos a deletar na linha
            var elIndex = 0.;
            var deletedElements = 0;
            line.forEach(function () {
                if (Math.random() > .5 && (deletedElements < nToDelete)) {
                    board[lineIndex][elIndex] = 0;
                    deletedElements++;
                }
                elIndex++;
            });
            lineIndex++;
        });
        return board;
    };
    Board.prototype.toString = function () {
        return this.matrixToString(this.board);
    };
    // @ts-ignore
    Board.prototype.matrixToString = function (board) {
        var str = "";
        // @ts-ignore
        board.forEach(function (line) { return str += line.toString() + "\n"; });
        return str;
    };
    return Board;
}());
exports.Board = Board;
var board = new Board();
/* console.log("----- Preenchido -----")
console.log(board.toString());

console.log("----- Coisado -----")
console.log(board.matrixToString(board.getGameBoard())); */
var a = [[1, 2, 3], [4, 5, 6]];
var b = [[1, 2, 3], [4, 5, 7]];
//console.log(JSON.stringify(a) == JSON.stringify(b))
