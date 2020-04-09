import firebase from 'firebase/app'
import { useHistory } from 'react-router-dom'

const history = useHistory()
const loginRef = firebase.auth()

export async function loginService(email, password) {
    try {
        const resp = await loginRef.signInWithEmailAndPassword(email, password)
        resp && history.push('/phome')
    } catch (err) {
        console.error(err)
    }
}