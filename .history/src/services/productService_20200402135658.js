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
        
        firestoreRef.where('uid', '==', uid).get().then(resp => {
            const list = resp.docs.map(el => {
                return { id: el.id, ...el.data()}
            })
            resolve(list)
        })
        .catch(err => {
            console.error(err)
            reject("Erro ao recuperar os produtos")
        })
    })
}

export function updateProd(prod) {
    return new Promise((resolve, reject) => {
        firestoreRef.doc(prod.id).set(prod).then(_ => resolve(`Produto ${prod.name} editado com sucesso`))
        .catch(err => {
            console.error(err)
            reject(`Erro ao salvar dados do produto ${prod.name}`)
        })
    })
}