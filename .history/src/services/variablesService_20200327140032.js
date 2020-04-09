import axios from 'axios'
import { urlCep } from '../functions/urls'

export async function getCepService(number) {
    try {
        return await axios.get(urlCep(number))
    } catch (error) {
        console.error(error)
    }
}