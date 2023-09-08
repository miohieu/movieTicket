export type UserLogin = {
    content:ContentType
}

export interface ContentType {
    taiKhoan: string
    hoTen: string
    email: string
}
