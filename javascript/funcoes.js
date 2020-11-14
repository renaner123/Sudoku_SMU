function clearBoard(){
    alert("Clear");
};

function newBoard(){
    alert("New");
};

function solve(){
    alert("Solve");
};

function checkRow(){

}

function checkBoard(){

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


