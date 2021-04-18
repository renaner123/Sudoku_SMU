// To allow multiple users to run the demo without playing a game of chatroulette,
// we give both callers in the demo a random token and then only make calls between
// users with these token suffixes. So, you still might run into a user besides yourself.

// The demos uses unauthenticated users on the "sipjs.onsip.com" demo domain.
// The demos uses OnSIP's WebSocket Server which hosts the "sipjs.onsip.com" demo domain.
const domain = "webrtc.smu20202.boidacarapreta.cc";

export const nameuser1 = "ederson3";
export const uriuser1 = "sip:ederson3" + "@" + domain;
export const webSocketServeruser1 = "wss://webrtc.smu20202.boidacarapreta.cc:8089/ws";

export const nameuser2 = "ederson4";
export const uriuser2 = "sip:ederson4" + "@" + domain;
export const webSocketServeruser2 = "wss://webrtc.smu20202.boidacarapreta.cc:8089/ws";
