import firebase from 'firebase/app'


const loginRef = firebase.auth()

export async function loginService(email, password) {
    try {
        const resp = await loginRef.signInWithEmailAndPassword(email, password)
        return resp.user
    } catch (err) {
        console.error(err)
    }
}

export async function createAccountService(email, password) {
    try {
        const resp = await loginRef.createUserWithEmailAndPassword(email, password)
        return resp && resp.user
    } catch (err) {
        console.error(err)
        return err
    }
}