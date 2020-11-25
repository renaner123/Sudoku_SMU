const rp = require('request-promise');

// aqui tu pega a coisa
rp({
    method: 'POST',
    uri: 'http://localhost:42069/startNewGame',
    body: {
        dificulty: 1,
        clientId: "SuyKingsleigh"
    },
    json: true // Automatically stringifies the body to JSON
}).then(function (parsedBody) {
    console.log(parsedBody);
}).catch(function (err) {
    console.log("Body: " + err);
});


let solved = [
    [
        7, 0, 0, 0, 0,
        3, 4, 0, 0
    ],
    [
        0, 0, 0, 7, 8,
        0, 1, 2, 3
    ],
    [
        1, 0, 0, 0, 5,
        6, 0, 8, 9
    ],
    [
        0, 9, 0, 2, 3,
        0, 5, 0, 4
    ],
    [
        0, 6, 4, 0, 0,
        0, 2, 3, 0
    ],
    [
        0, 3, 1, 5, 6,
        0, 8, 0, 7
    ],
    [
        3, 0, 0, 6, 0,
        0, 9, 7, 0
    ],
    [
        6, 0, 0, 9, 7,
        8, 0, 1, 0
    ],
    [
        9, 7, 8, 3, 0,
        2, 6, 4, 5
    ]
]

// aqui tu verifica a coisa
rp({
    method: 'POST',
    uri: 'http://localhost:42069/checkSolution',
    body: {
        solved: solved,
        clientId: "SuyKingsleigh"
    },
    json: true // Automatically stringifies the body to JSON
}).then(function (parsedBody) {
    console.log(parsedBody);
}).catch(function (err) {
    console.log("Body: " + err);
});