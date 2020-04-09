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

export function saveStoreFromUser(uid, data) {
    
    return firestoreRef.doc(uid).update({ store: data})
}

export function loadUser(uid) {
    return new Promise((resolve, reject) => {
        firestoreRef.doc(uid).get().then(resp => resolve(resp.data()))
        .catch(err => reject('Erro no banco de dados. Tente novamente mais tarde.'))
    })
}

export function updateUserAccount(user) {
    return new Promise((resolve, reject) => {
        firestoreRef.doc(user.uid).update(user).then(resp => {
            resolve(user)
        }).catch(err => {
            console.error(err)
            reject('Erro ao salvar novos dados')
        })
    })
}