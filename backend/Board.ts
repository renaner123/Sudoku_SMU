const BASE_MATRIX = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],

    [2, 3, 1, 5, 6, 4, 8, 9, 7],
    [5, 6, 4, 8, 9, 7, 2, 3, 1],
    [8, 9, 7, 2, 3, 1, 5, 6, 4],

    [3, 1, 2, 6, 4, 5, 9, 7, 8],
    [6, 4, 5, 9, 7, 8, 3, 1, 2],
    [9, 7, 8, 3, 1, 2, 6, 4, 5]
]

const ZONA_INDEX = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

enum DificultyLevel {
    EASY,
    MEDIUM,
    HARD,
    ASIAN
}

export class Board {
    public board: number[][];
    private dificulty: {
        max: number;
        min: number;
    }


    constructor(dificulty: number = DificultyLevel.EASY) {
        this.board = []
        ZONA_INDEX.forEach(zone => {
            zone.sort(() => .5 - Math.random())
            zone.forEach(i => this.board.push(BASE_MATRIX[i]))
        });

        if (dificulty === DificultyLevel.EASY) this.dificulty = {min: 2, max: 3}
        if (dificulty === DificultyLevel.MEDIUM) this.dificulty = {min: 3, max: 5}
        if (dificulty === DificultyLevel.HARD) this.dificulty = {min: 5, max: 7}
        if (dificulty === DificultyLevel.ASIAN) this.dificulty = {min: 6, max: 8}


    }


    public getGameBoard() {
        let lineIndex = 0;
        this.board.forEach(line => {
            let nToDelete = Math.floor(Math.random() * this.dificulty.min) + this.dificulty.max; // numero de elementos a deletar na linha
            let elIndex = 0.
            let deletedElements = 0;

            line.forEach(() => {

                if (Math.random() > .5 && (deletedElements < nToDelete)) {
                    this.board[lineIndex][elIndex] = 0;
                    deletedElements++;
                }

                elIndex++;
            })
            lineIndex++;
        })
    }


    public toString() {
        let str = "";
        this.board.forEach(line => str += line.toString() + "\n");
        return str;
    }



}

let b = new Board(DificultyLevel.ASIAN);
b.getGameBoard()
console.log(b.toString());
