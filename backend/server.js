
function generateMatrix(dificulty) {
    let matrix = [];

    for (let i = 0; i < 9; i++) {
        let line = [];

        for (let j = 0; j < 9; j++) {
            let n = generateNumber(line);
            line.push(n);
        }
        matrix.push(line);
    }
    return matrix;
}
