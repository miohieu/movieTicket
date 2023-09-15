import { useAppSelector } from "store"

export const useAuth = () => {
    const { accessToken, userLogin } = useAppSelector((state) => state.quanLyNguoiDung)
    

    return {
        accessToken,
        user: userLogin
    }

}
