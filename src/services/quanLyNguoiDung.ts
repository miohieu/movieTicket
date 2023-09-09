import { apiInstance } from 'constant/apiInstance'
import { LoginSchemaType, RegisterSchemaType } from 'schema'
import { UserLogin } from 'types/UserManagement'


const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_NGUOI_DUNG_API
})

export const quanLyNguoiDungServices = {
    register: (data: RegisterSchemaType) => api.post('/DangKy', data),

    login: (data: LoginSchemaType) => api.post<APIResponse<UserLogin>>('/DangNhap', data),
}
