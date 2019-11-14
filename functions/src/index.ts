import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'

admin.initializeApp(functions.config().firebase)

exports.newSubscriberNotification = (miId, name) => {


    functions.firestore
    .document('notifications')
    .onCreate(async event => {
        const data = event.data();
        console.log(data)

        const userId = data.userId;
        

        const payload = {
            notification: {
                title: 'Estoy perdido',
                body: `${userId} está perdido, revisa mi localización`
            }
        }

        const db = admin.firestore();
        const devicesRef = db.collection('devices').where('userId', '==', userId)

        const devices = await devicesRef.get();

        const tokens =[]

        devices.forEach(device =>{
            const token = device.data().token;
            tokens.push(token);
        })

        return admin.messaging().sendToDevice(tokens, payload);

    });

}


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
