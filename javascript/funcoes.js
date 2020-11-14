<script src="https://unpkg.com/peerjs@1.3.1/dist/peerjs.min.js"></script>

function clearBoard(){
    alert("Clear");
    stop();
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


