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
    private firstZoneLine: number[][];

    constructor() {
        this.board = [
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

        // "bagunça" as linhas
        [[1, 2, 3], [4, 5, 6], [7, 8, 9]].forEach(
            (index) => {
                let i = 0;
                index.sort(() => .5 - Math.random())
                    .forEach(n => {
                        let buffer = this.board[i];
                        this.board[i] = this.board[n];
                        this.board[n] = buffer;
                        i++;
                    })
            }
        );

        //
        // // "bagunça" as colunas
        // [[1, 2, 3], [4, 5, 6], [7, 8, 9]].forEach(
        //     (index) => {
        //         let i = 0;
        //         index.sort(() => .5 - Math.random())
        //             .forEach(n => {
        //                 let buffer = this.getRow(i);
        //                 this.board[i] = this.board[n];
        //                 this.board[n] = buffer;
        //                 i++;
        //             })
        //     }
        // );


        // console.log(index)
    }


    // private getRow(rowIndex: number) {
    //     let array = []
    //     this.board.forEach(line => array.push(line[rowIndex]))
    //     return array;
    // }
}

let b = new Board();
let l = BASE_MATRIX[0]
console.log(l);
let i = l[0]
console.log(i);

// https://stackoverflow.com/questions/6924216/how-to-generate-sudoku-boards-with-unique-solutions/7280517