var matrix = [];
matrix =[[8,3,5,4,1,6,9,2,7], //vou receber uma matrix do back para manipular na interface
                    [2,9,6,8,5,7,4,3,1],
                    [4,1,7,2,9,3,6,5,8],
                    [5,6,9,1,3,4,7,8,2],
                    [1,2,3,6,7,8,5,4,9],
                    [7,4,8,5,2,9,1,6,3],
                    [6,5,2,7,8,1,3,9,4],
                    [9,8,1,3,4,5,2,7,6],
                    [3,7,4,9,6,2,8,1,5]];


function clearBoard(){ //vai voltar pa matrix que o newBoard gerou
    alert("Clear");
};

function newBoard(){ // joga matrix para interface, no caso, uma matrix para ser resolvida,

    var dificuldade = document.getElementById("cDifficulty");

    
    var url = "http://localhost:42069/startNewGame";//Sua URL

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", url, true);

    xhttp.onreadystatechange = function(){//Função a ser chamada quando a requisição retornar do servidor
        if ( xhttp.readyState == 4 && xhttp.status == 200 ) {//Verifica se o retorno do servidor deu certo            
        }
    }
    matrix = xhttp.send("dificuldade");


};

function solve(){ //envia a "matrix" que o usuário preencheu pra verificar com a matrix completa.

var matrixCheck = [];
matrixCheck =[[,,,,,,,,], 
                    [,,,,,,,,],
                    [,,,,,,,,],
                    [,,,,,,,,],
                    [,,,,,,,,],
                    [,,,,,,,,],
                    [,,,,,,,,],
                    [,,,,,,,,],
                    [,,,,,,,,]];

var cell = "";
var pos = 0;
for(var i =0;i<matrix.length;i++){ //recebe valores do front e insere na matriz para comparar com o gabarito
        for(var y=0; y< matrix.length;y++){
            cell = document.getElementById("cell-"+pos);
            matrixCheck[i][y]= cell.value;
            pos++;
        }
 }
 checkBoard(matrixCheck);
 
};

function checkBoard(args){ //Verificar se o que o usuário enviar no solve está correto
   

    var url = "http://localhost:42069/checkSolution";//Sua URL

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", url, true);

    xhttp.onreadystatechange = function(){//Função a ser chamada quando a requisição retornar do servidor
        if ( xhttp.readyState == 4 && xhttp.status == 200 ) {//Verifica se o retorno do servidor deu certo            
        }
    }
    validate = xhttp.send(matrix);

    (validate==false) ? alert("Try Gain") : alert("Gz"); */

/*     for(var i =0;i<matrix.length;i++){ //recebe valores do front e insere na matriz para comparar com o gabarito
            for(var y=0; y< matrix.length;y++){
                if(matrix[i][y]==args[i][y]){
                    continue;
                }else{
                     validate = false;
                }
            }
     }
     (validate==false) ? alert("Try Gain") : alert("Gz"); */

}

function webRtc(){
    var peer = new Peer(); 
    var conn = peer.connect('another-peers-id');
    // on open will be launch when you successfully connect to PeerServer
    conn.on('open', function(){
    // here you have conn.id
    conn.send('hi!');
    });
}

