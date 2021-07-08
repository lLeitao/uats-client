// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

const chromiumArgs = [
  '--disable-web-security', '--no-sandbox', '--disable-web-security',
  '--aggressive-cache-discard', '--disable-cache', '--disable-application-cache',
  '--disable-offline-load-stale-cache', '--disk-cache-size=0',
  '--disable-background-networking', '--disable-default-apps', '--disable-extensions',
  '--disable-sync', '--disable-translate', '--hide-scrollbars', '--metrics-recording-only',
  '--mute-audio', '--no-first-run', '--safebrowsing-disable-auto-update',
  '--ignore-certificate-errors', '--ignore-ssl-errors', '--ignore-certificate-errors-spki-list'
];


venom
  .create({
      session: "testing",
      useChrome: false
    })
  .then((client) => start(client))
  .catch((erro) => {
    console.log('errao', erro);
  });

  
function start(client) {
//   client.sendText('@c.us', 'Deus abençoe seu dia.').then((result) => {
//     console.log('Result: ', result); //return object success
//   })

  client.onMessage((message) => {
      console.log(`${message.from}: ${message.body}`)
  })
}


// function start(client) {
//   client.onMessage((message) => {
//     if (message.body === 'penna' && message.isGroupMsg === false) {
//       client
//         .sendText(message.from, 'Deus abençoe meu irmão.')
//         .then((result) => {
//           console.log('Result: ', result); //return object success
//         })
//         .catch((erro) => {
//           console.error('Error when sending: ', erro); //return object error
//         });
//     }
//   });
// }
