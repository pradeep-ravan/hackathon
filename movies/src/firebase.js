import firebase from "firebase/app"
import "firebase/auth"
import "firebase/storage"
import "firebase/firestore"

firebase.initializeApp(
    {
        apiKey: "AIzaSyDoVIuQAIzhCpUBiMNiDuFKNIj0ykTzMSE",
        authDomain: "movies-fe047.firebaseapp.com",
        projectId: "movies-fe047",
        storageBucket: "movies-fe047.appspot.com",
        messagingSenderId: "746140177392",
        appId: "1:746140177392:web:d44f129bf513658dbd8335"
      }
)
export const auth = firebase.auth();
const firestore = firebase.firestore();
export const database ={
    users:firestore.collection('users'),
    getCurrentTimeStamp : firebase.firestore.FieldValue.serverTimestamp
}
export const storage = firebase.storage();
// export default firebase;