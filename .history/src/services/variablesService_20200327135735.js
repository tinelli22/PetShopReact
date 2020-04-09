import axios from 'axios'
import { urlCep } from '../functions/urls'

export async function getCepService(number) {
    try {
        const resp = await axios.get(urlCep(number))
        console.log(resp)
    } catch (error) {
        console.error(error)
    }
}