import { apiInstance } from "constant/apiInstance"
import { APIResponse } from "types/APIResponse"
import { Rap } from "types/Movie"
const api = apiInstance({
    baseURL: import.meta.env.VITE_QUANLYRAPAPI,

}
)

export const quanLyRapService = {
    getMovieScheduleByID: (id: string) => api.get<APIResponse<Rap>>(`/LayThongTinLichChieuPhim?MaPhim=${id}`)
}
