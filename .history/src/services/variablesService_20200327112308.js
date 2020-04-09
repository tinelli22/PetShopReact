import axios from 'axios'
import { urlCep } from '../functions/urls'

export async function getCepService(number) {
    try {
        const resp = await axios.get(`viacep.com.br/ws/${number}/json/`)
        console.log(resp)
    } catch (error) {
        console.log(error)
    }
}