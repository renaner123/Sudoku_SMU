var callBtn = document.getElementById("callBtn");
var form = document.getElementById("config-form");
var callBtnCreate = document.getElementById("createUA");
var remoteVideo = document.getElementById("remoteVideo");
var localVideo = document.getElementById("localVideo");

callBtnCreate.addEventListener("click", getinfos);


var newUri = "";
var newServer = "";
var newPassword = "";
var newName = "";

function getinfos(){

  newUri = document.getElementById("uri").value
  newName = document.getElementById("authorizationUser").value
  newPassword = document.getElementById("password").value
  newServer = document.getElementById("wsServers").value
  
  if((newUri || newName || newPassword || newServer)==""){
    window.alert("Campos inválidos")
  }else {
    Creating();
    window.alert("Usuário criado")
  }  

}

// var userAgent = new SIP.UA({
//   uri: "sip:ederson1@webrtc.smu20202.boidacarapreta.cc",
//   wsServers: "wss://webrtc.smu20202.boidacarapreta.cc:8089/ws",
//   password: "ederson1",
//   displayName: "ederson1",
// });

function Creating(){
  callBtn.addEventListener("click", sipCall);

  var userAgent = new SIP.UA({
    uri: newUri,
    wsServers: newServer,
    password: newPassword,
    displayName: newName
  });

  userAgent.on("invite", function(session) {
    console.warn("invite");
    session.accept();
    var pc;
  
    session.on("trackAdded", function() {
      // We need to check the peer connection to determine which track was added
  
      pc = session.sessionDescriptionHandler.peerConnection;
  
      // Gets remote tracks
      var remoteStream = new MediaStream();
      remoteVideo.srcObject = remoteStream;
      remoteVideo.play().then(() => {
        pc.getReceivers().forEach(function(receiver) {
          remoteStream.addTrack(receiver.track);
        });
      });
  
      // Gets local tracks
      var localStream = new MediaStream();
      pc.getSenders().forEach(function(sender) {
        localStream.addTrack(sender.track);
      });
      localVideo.srcObject = localStream;
      localVideo.play();
    });
  });
  function sipCall() {
    uriDestino = document.getElementById("uriDestino").value;

    var session = userAgent.invite(
      "sip:" + uriDestino
    );
  
    var pc;
    session.on("trackAdded", function() {
      // We need to check the peer connection to determine which track was added
  
      pc = session.sessionDescriptionHandler.peerConnection;
  
      // Gets remote tracks
      var remoteStream = new MediaStream();
      pc.getReceivers().forEach(function(receiver) {
        remoteStream.addTrack(receiver.track);
      });
      remoteVideo.srcObject = remoteStream;
      remoteVideo.play();
  
      // Gets local tracks
      var localStream = new MediaStream();
      pc.getSenders().forEach(function(sender) {
        localStream.addTrack(sender.track);
      });
      localVideo.srcObject = localStream;
      localVideo.play();
    });
  }
  
  
}

