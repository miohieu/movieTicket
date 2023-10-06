
import { apiInstance } from 'constant/apiInstance'
import { Movie } from 'types/Movie'
import { APIResponse } from 'types/APIResponse'

const api = apiInstance({
    baseURL: import.meta.env.example.VITE_QUANLYPHIMAPI
})

export const quanLyPhimService = {
    getMovieList: (query: '') => api.get<APIResponse<Movie[]>>(`/LayDanhSachPhim${query}`),
    getMovieByID: (id: string) => api.get<APIResponse<Movie>>(`/LayThongTinPhim?MaPhim=${id}`),
}
