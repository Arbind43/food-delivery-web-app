const admin = require('firebase-admin');
const serviceAccount = require(process.env.FIREBASE_SERVICE_ACCOUNT_PATH);
if(!admin.apps.length){
admin.initializeApp({ credential: admin.credential.cert(serviceAccount), databaseURL: process.env.FIREBASE_DB_URL });
}
const db = admin.database();
module.exports = async (path, payload) => {
await db.ref(path).update(payload);
};