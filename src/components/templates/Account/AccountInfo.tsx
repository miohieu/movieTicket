
import { Input, Button } from "components"
import { useAuth } from "hooks"
// import styled from "styled-components"
import { AccountSchemaType, AccountSchema } from "schema/AccountSchema"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { quanLyNguoiDungServices } from "services"

export const AccountInfo = () => {
    const user = useAuth()
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
            console.log({ values },"value")
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Thong tin tai khoan</h1>
            <Input label="Tai khoan"
                name="taiKhoan"
                register={register} 
                />
            <Input label="Ho va ten" name="hoTen" register={register} />
            <Input label="So dien thoai" name="soDt" register={register} />
            <Input label="Ma nhom" name="maNhom" register={register} />
            <Input label="Ma loai nguoi dung" name="maLoaiNguoiDung" register={register} />
            <Button>Hoan thanh chinh sua</Button>
        </form>
    )
}

