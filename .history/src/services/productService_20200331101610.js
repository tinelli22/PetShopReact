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