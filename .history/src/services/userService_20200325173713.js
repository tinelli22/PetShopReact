import firebase from 'firebase/app'
import { userCollection } from '../consts/collections'

const firestoreRef = firebase.firestore().collection(userCollection)

export async function saveUserOnCollection(user) {
    try {
        const resp = await firestoreRef.doc(user.uid).set(user)
        console.log(resp)
        return resp
    } catch (err) {
        console.log(err)
        return err
    }
}

export function loadUser(uid) {
    return new Promise((resolve, reject) => {
        firestoreRef.doc(uid).get().then(resp => resolve(resp.data()))
        .catch(err => reject('Erro no banco de dados. Tente mais tarde.'))
    })
}