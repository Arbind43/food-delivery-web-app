import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';


const firebaseConfig = {
apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const listenToOrder = (orderId, cb) => {
const r = ref(db, `orders/${orderId}`);
onValue(r, snap => { cb(snap.val()); });
};