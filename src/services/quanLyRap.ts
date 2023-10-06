import { apiInstance } from "constant/apiInstance"
import { APIResponse } from "types/APIResponse"
const api = apiInstance({
    baseURL: import.meta.env.VITE_QUANLYRAPAPI,
}
)

export const quanLyRapService = {
    getMovieScheduleByID: (id: string) => api.get<APIResponse>(`/LayThongTinLichChieuPhim?MaPhim=${id}`)
}
