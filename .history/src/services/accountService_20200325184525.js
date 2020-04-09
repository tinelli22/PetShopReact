import firebase from 'firebase/app'
import { saveUserOnCollection, loadUser } from './userService'


const loginRef = firebase.auth()

export async function loginService(email, password) {
    try {
        const { user: { uid } } = await loginRef.signInWithEmailAndPassword(email, password)
        const data = await loadUser(uid)
        console.log(data)
    } catch (error) {
        console.log(error)
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
