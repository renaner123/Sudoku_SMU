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

matrixAux =[9][9];

function clearBoard(){ //vai voltar pa matrix que o newBoard gerou

    var cell = "";
    var pos = 0;
    for(var i =0;i<matrix.length;i++){
        for(var y=0; y< matrix[0].length;y++){
            cell = document.getElementById("cell-"+pos);
            cell.value = matrixAux[i][y];    
            pos++;
        }
    }
};

function newBoard(){ // joga matrix para interface, no caso, uma matrix para ser resolvida,

    var dificulty = document.getElementById("cDifficulty");

    
    var url = "http://localhost:42069/startNewGame";//Sua URL

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", url, true);   
    xhttp.setRequestHeader("Content-type", "application/json");

    xhttp.onreadystatechange = function(){//Função a ser chamada quando a requisição retornar do servidor
        if ( xhttp.readyState == 4 && xhttp.status == 200 ) {//Verifica se o retorno do servidor deu certo      
            var obj = JSON.parse(xhttp.responseText);
            matrix = obj.gameBoard;  

            var cell = "";
            var pos = 0;
            for(var i =0;i<matrix.length;i++){
                for(var y=0; y< matrix[0].length;y++){
                    cell = document.getElementById("cell-"+pos);
                    if(matrix[i][y]==0){
                        cell.value = " ";   
                        matrix[i][y] = "";
                        document.getElementById("cell-"+pos).disabled=false;                                             
                    }else{
                        cell.value = matrix[i][y];     
                        document.getElementById("cell-"+pos).disabled=true;
                    } 
                    pos++;
                }
            }
            matrixAux = matrix;
  
        }
    }
    xhttp.send(JSON.stringify({
        "dificulty": Number(dificulty.value),
        "clientId" : "SuyKingsleigh"
    }));

};

function solve(){ //envia a "matrix" que o usuário preencheu pra verificar com a matrix completa.

var matrixCheck = new Array(9).fill(0).map(item =>(new Array(9).fill(0))) 

var cell = "";
var pos = 0;
for(var i =0;i<matrixCheck.length;i++){ //recebe valores do front e insere na matriz para comparar com o gabarito
        for(var y=0; y< matrixCheck.length;y++){
            cell = document.getElementById("cell-"+pos);
            matrixCheck[i][y]= Number(cell.value);
            pos++;
        }
 }

return (matrixCheck);
 
};

function checkBoard(){ //Verificar se o que o usuário enviar no solve está correto   

    var url = "http://localhost:42069/checkSolution";//Sua URL

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/json");

    xhttp.onreadystatechange = function(){//Função a ser chamada quando a requisição retornar do servidor
        if ( xhttp.readyState == 4 && xhttp.status == 200 ) {//Verifica se o retorno do servidor deu certo            
            var obj = JSON.parse(xhttp.responseText);
            (obj.win==false) ? alert("Try Gain") : alert("Gz");
        }
    }
    var matrixSend = solve();

    xhttp.send(JSON.stringify({
        "solved": matrixSend,
        "clientId": "SuyKingsleigh",

    }));


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

