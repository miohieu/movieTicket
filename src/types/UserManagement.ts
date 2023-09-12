export type UserLogin = {
    taiKhoan: string
    hoTen: string
    email: string
    soDT: string
    maNhom: string
    maLoaiNguoiDung: 'KhachHang' | 'QuanTri'
    accessToken: string
}


export type UserByAccessTokenProp = Omit<UserLogin, 'accessToken'> & {
    thongTinDatVe?: []
    loaiNguoiDung: {
        maLoaiNguoiDung: "KhachHang" | "QuanTri"
    }
}

