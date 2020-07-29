import axios from 'axios'
import { api } from '../../assets/constant'

export const listonload = (params) => {
    return axios.post(api, null, { params }); 
}

export const addmaintennace = (params) => {
    return axios.post(api, null , {params});
}