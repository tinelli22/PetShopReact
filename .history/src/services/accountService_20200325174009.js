import firebase from 'firebase/app'
import { saveUserOnCollection, loadUser } from './userService'


const loginRef = firebase.auth()

export function loginService(email, password) {
    return new Promise((resolve, reject) => {
        loginRef.signInWithEmailAndPassword(email, password)
        .then(resp => {
            loadUser(resp.user.uid).then(sndResp => resolve(sndResp))
            .catch(err => reject(err.code))
        })
        .catch(err => {
            //console.error(err)
            reject(err.code)
        })
    })
}

export function createAccountService(values) {

    return new Promise((resolve, reject) => {
        loginRef.createUserWithEmailAndPassword(values.email, values.password)
        .then(resp => {
            const user = {
                uid: resp.user.uid,
                ...values
            }
            saveUserOnCollection(user).then(_ => resolve(user))
        })
        .catch(err => reject(err.code))
    })
}
