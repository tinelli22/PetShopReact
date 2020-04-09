import firebase from 'firebase/app'
import { saveUserOnCollection } from './userService'


const loginRef = firebase.auth()

export async function loginService(email, password) {
    try {
        const resp = await loginRef.signInWithEmailAndPassword(email, password)
        return resp.user
    } catch (err) {
        console.error(err)
        return err.code
    }
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
