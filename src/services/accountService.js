import firebase from 'firebase/app'
import { saveUserOnCollection, loadUser } from './userService'


const authRef = firebase.auth()

export function loginService(email, password) {
   return new Promise((resolve, reject) => {
       authRef.signInWithEmailAndPassword(email, password)
       .then(resp => loadUser(resp.user.uid)
            .then(data => resolve(data))
            .catch(err => reject(err))
       ).catch(err => reject(err.code))
   })
}

export function userAlreadyLoggedService() {
    return new Promise((resolve, reject) => {
        authRef.onAuthStateChanged(user => {
            if(user) {
                loadUser(user.uid).then(data => resolve(data))
                .catch(err => reject('Erro ao recuperar dados do usuário logado.'))
            } else {
                reject(false)
            }
        })
    })
}

export function createAccountService(values) {

    return new Promise((resolve, reject) => {
        authRef.createUserWithEmailAndPassword(values.email, values.password)
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
