export type Movie = {
    maPhim: number
    tenPhim: string
    biDanh: string
    trailer: string
    hinhAnh: string
    moTa: string
    maNhom: string
    ngayKhoiChieu: string
    danhGia: number
    hot: boolean
    dangChieu: boolean
    sapChieu: boolean
}

export type Rap = {
    biDanh: string
    dangChieu: true
    danhGia: number
    heThongRapChieu: Array<Movie>
    hinhAnh: string
    hot: boolean
    maNhom: string
    maPhim: number
    moTa: string
    ngayKhoiChieu: string
    sapChieu: boolean
    tenPhim: string
    trailer: string
}
