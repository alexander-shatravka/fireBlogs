import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDHfasKE5rXuoEJerSiyOOkypRP0gbsvqA",
    authDomain: "fireblogsyt-83300.firebaseapp.com",
    projectId: "fireblogsyt-83300",
    storageBucket: "fireblogsyt-83300.appspot.com",
    messagingSenderId: "142447616048",
    appId: "1:142447616048:web:f1cb82108aacfc76f40df5"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { timestamp };
export default firebaseApp.firestore();