cd backend
npm run build
npm run installdemo
cd ../libs/SIP.js-master/demo/
npm run build-demo
cd ../../../backend/
tsc server.ts
node server.js
