import axios, { AxiosRequestHeaders, CreateAxiosDefaults } from 'axios'
import { getAccessToken } from 'utils'


    
const TokenCybersoft = import.meta.env.VITE_TOKEN
    export const apiInstance = (config?: CreateAxiosDefaults) => {
    const api = axios.create(config)
    api.interceptors.request.use((config) => {
        return {
            ...config,
            headers: {
                Authorization: 'Bearer '+ getAccessToken(),
                TokenCybersoft,
            } as unknown as AxiosRequestHeaders,
        }
    })

    return api
}
