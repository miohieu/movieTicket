import { zodResolver } from '@hookform/resolvers/zod'
import { Input, Button } from 'components'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { LoginSchema, LoginSchemaType } from 'schema'
import { useAppDispatch, useAppSelector } from 'store'
import { loginThunk } from 'store/quanLyNguoiDung'

export const LoginTemplate = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<LoginSchemaType>({
        mode: 'onChange',
        resolver: zodResolver(LoginSchema),
    })
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isFetching = useAppSelector(state => state.quanLyNguoiDung.isFetching)

    const onSubmit: SubmitHandler<LoginSchemaType> = (value) => {
        dispatch(loginThunk(value)).unwrap().then(() => { 
            toast.success('dang nhap thanh cong')
            navigate('/') })
        .catch((err)=>console.log(err))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="font-600 text-30 text-white">Đăng nhập</h2>
            <Input
                className="mt-16"
                label="Tài khoản"
                placeholder="Tài khoản"
                id="taiKhoan"
                name="taiKhoan"
                error={errors?.taiKhoan?.message}
                register={register}
            />
            <Input
                className="mt-16"
                label="Mật khẩu"
                placeholder="Mật khẩu"
                id="matKhau"
                name="matKhau"
                type="password"
                error={errors?.matKhau?.message}
                register={register}
            />

            <Button className="!w-full !h-[48px] !mt-20" htmlType="submit" type="primary" 
            loading={isFetching}
            danger>
                Đăng nhập
            </Button>
        </form>
    )
}
