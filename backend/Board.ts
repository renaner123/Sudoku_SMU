import construct = Reflect.construct;

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


export class Board {
    public board: number[][];
    private ZONES_INDEXES: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    private firstZoneLine: number[][];


    // gera uma tabela completa
    constructor() {
        let board = BASE_MATRIX;

        // Reordena as linhas em grupos de 3 em 3, mantendo assim as zonas organizadas
        this.swap(this.ZONES_INDEXES, function (n, i) {
            let buffer = board[i];
            board[i] = board[n];
            board[n] = buffer;
            i++;
        });

        board = board.filter(Boolean);

        // Reordena as colunas em grupos de 3 em 3, matendo assim as zonas organizadas
        this.swap(this.ZONES_INDEXES, function (n, i) {
            let bufferIndex = Board.getRow(i, board).filter(Boolean);
            let bufferNewIndex = Board.getRow(n, board).filter(Boolean);

            board = Board.setRow(i, board, bufferNewIndex);
            board = Board.setRow(n, board, bufferIndex);
        })

        this.board = board;
    }

    
    private static getRow(i: number, board: number[][]) {
        let arr = []
        board.forEach(line => arr.push(line[i]))
        return arr;
    }


    private static setRow(rowIndex: number, board: number[][], newRow: number[]) {
        for (let j = 0; j < newRow.length; j++)
            board[j][rowIndex] = newRow[j]

        return board;
    }

    // funcao para fazer a troca de posicao da matriz, mantendo as zonas
    swap(indexes: number[][], callback) {
        indexes.forEach(index => {
            let i = 0;
            index.sort(() => .5 - Math.random())
                .forEach(n => callback(n, i))
        })
    }


}

let b = new Board();
console.log(b.board);
