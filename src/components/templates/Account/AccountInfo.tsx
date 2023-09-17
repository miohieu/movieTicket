import { InputS, Button } from "components"
import { useAuth } from "hooks"
import { AccountSchemaType, AccountSchema } from "schema/AccountSchema"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { quanLyNguoiDungServices } from "services"
import { toast } from "react-toastify"


export const AccountInfo = () => {
    const { user } = useAuth()

    console.log(user, "user");

    const {
        reset,
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<AccountSchemaType>({
        resolver: zodResolver(AccountSchema),
        mode: 'onChange',
    })
    const onSubmit: SubmitHandler<AccountSchemaType> = async (values) => {

        try {
            console.log({ values }, "value")
            await quanLyNguoiDungServices.updateUser(values)
            toast.success("Cap nhat thanh cong")
        } catch (err) {
            console.error(err)
            toast.warning("Error")
        }
    }


    useEffect(() => {
        reset({
            ...user,
            soDt: user?.soDT
        })
    }, [reset, user])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-title">Thong tin tai khoan</h1>
            <InputS label="Tai khoan"
                name="taiKhoan"
                register={register}
                disable={true}
                error={errors?.taiKhoan?.message}
            />
            <InputS label="Ho va ten"
                name="hoTen"
                register={register}
                error={errors?.hoTen?.message}
            />

            <InputS label="Email"
                name="email"
                register={register}
                error={errors?.email?.message}
            />
            <InputS label="So dien thoai"
                name="soDt"
                register={register}
                error={errors?.soDt?.message} />
            <InputS label="Ma nhom"
                name="maNhom"
                register={register}
                error={errors?.maNhom?.message} />
            <InputS label="Ma loai nguoi dung"
                name="maLoaiNguoiDung"
                disable={true}
                register={register}
            />

            <div className="text-right">
                <Button type="primary" htmlType="submit" className="!h-[46px] my-[10px]">Hoan thanh chinh sua</Button>
            </div>
        </form>
    )
}

