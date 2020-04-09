import firebase from 'firebase/app'
import { productsCollection } from '../consts/collections'

const firestoreRef = firebase.firestore().collection(productsCollection)

export function insertProductService(prod) {
    return new Promise((resolve, reject) => {
        firestoreRef.add(prod).then(resp => {
            const prodInserted = { ...prod, id: resp.id }
            resolve({ message: 'Produto cadastrado com sucesso', product: prodInserted })
        }).catch(err => {
            console.error(err)
            reject("Erro ao cadastrar produto. Tente novamente")
        })
    })
}

export function getUserProducts(uid) {
    return new Promise((resolve, reject) => {
        const list = []

        firestoreRef.where('uid', '==', uid).get().then(resp => {
            resp.docs.forEach(doc => list.concat({ id: doc.id, ...doc.data()}))
            resolve(list)
        })
        .catch(err => {
            console.error(err)
            reject("Erro ao recuperar os produtos")
        })
    })
}