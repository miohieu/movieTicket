import { apiInstance } from 'constant/apiInstance'
import { LoginSchemaType, RegisterSchemaType } from 'schema'
import { AccountSchemaType } from 'schema/AccountSchema'
import { UserByAccessTokenProp, UserLogin } from 'types/UserManagement'
import { APIResponse } from 'types/APIResponse'

const api = apiInstance({
    baseURL: import.meta.env.example.VITE_QUAN_LY_NGUOI_DUNG_API
})

export const quanLyNguoiDungServices = {
    register: (data: RegisterSchemaType) => api.post('/DangKy', data),

    login: (data: LoginSchemaType) => api.post<APIResponse<UserLogin>>('/DangNhap', data),

    getUserByAccessToken: () => api.post<APIResponse<UserByAccessTokenProp>>('/ThongTinTaiKhoan'),

    updateUser: (data: AccountSchemaType) => api.put<APIResponse<AccountSchemaType>>('/CapNhatThongTinNguoiDung', data)

}
