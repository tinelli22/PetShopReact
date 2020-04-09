import firebase from 'firebase/app'
import { productsCollection } from '../consts/collections'

const firestoreRef = firebase.firestore().collection(productsCollection)

export async function saveProductService(uid, prod) {
    try {
        return await firestoreRef.add(prod)
    } catch (error) {
        return error
    }
}