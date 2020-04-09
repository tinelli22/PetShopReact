import firebase from 'firebase/app'
import { userCollection } from '../consts/collections'

const firestoreRef = firebase.firestore().collection(userCollection)

export async function saveUserOnCollection(user) {
    try {
        const resp = await firestoreRef.doc(user.uid).set(user)
        console.log(resp)
    } catch (err) {
        console.error(err)
    }
}