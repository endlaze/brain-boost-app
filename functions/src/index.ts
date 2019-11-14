import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'

admin.initializeApp(functions.config().firebase)

exports.newLostNotification = functions.firestore
  .document('/notifications/{notificationId}')
  .onCreate(async (snapshot, context) => {

    const data = snapshot.data();
    if (!data) return null

    const careId = data.careId;
    const patientName = data.patientName

    const payload = {
      notification: {
        title: 'Estoy perdido',
        body: `${patientName} está perdido, revisa mi localización`
      }
    }

    const db = admin.firestore();
    const devicesRef = db.collection('devices').where('userId', '==', careId)

    const devices = await devicesRef.get();

    const tokens: Array<string> = []

    devices.forEach((device) => {

      const token = device.data().token;
      tokens.push(token);
    })

    return admin.messaging().sendToDevice(tokens, payload);

  });




// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
