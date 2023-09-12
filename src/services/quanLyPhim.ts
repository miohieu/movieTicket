
import { apiInstance } from 'constant/apiInstance'
import { Movie } from 'types/Movie'

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUANLYPHIMAPI
})

export const quanLyPhimService = {
    getMovieList: (query: '') => api.get<APIResponse<Movie>>(`/LayDanhSachPhim${query}`) 
}
