import styled from "styled-components"

import { NavLink, useNavigate } from 'react-router-dom'
import { Button, Input, Avatar, Popover } from '.'
import { PATH } from "constant"
import { useAuth } from "hooks"
import { useAppDispatch, useAppSelector } from "store"
import { quanLyNguoiDungActions } from "store/quanLyNguoiDung"
import { useEffect, useState } from "react"
import cn from "classnames"

export const Header = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { accessToken } = useAuth()
    const user = useAppSelector(state => state.quanLyNguoiDung.userLogin)

    const [isScroll, setScroll] = useState<boolean>(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setScroll(true)
                return
        }
        setScroll(false)
    }
    console.log(isScroll);
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])


    return (
        <Container className={cn({
                    'header-fixed': isScroll
                })}>
            <div className="header-content">
                <h1 className="brand"
                    onClick={() => navigate('/')}
                >
                    <span className="text-[var(--primary-color)]"
                    >CYBER</span>MOVIE
                </h1>
                <div className="flex items-center gap-[60px]">
                    <nav>
                        <NavLink to="">LỊCH CHIẾU</NavLink>
                        <NavLink to="">PHIM</NavLink>
                        <NavLink to="">RẠP</NavLink>
                        <NavLink to="">TIN TỨC</NavLink>
                    </nav>
                    <div className="search">
                        <Input placeholder="Tìm kiếm tên phim" />
                        <Button>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </Button>
                    </div>
                    <div>
                        {
                            accessToken ?

                                <Popover content={
                                    <div className="px-20 py-10 text-left">
                                        <p className="font-700"> {user?.taiKhoan} </p>
                                        <hr />
                                        <div className="my-16">
                                            <p className="cursor-pointer hover:text-teal-600"
                                                onClick={() => { navigate(PATH.account) }}
                                            >Thong tin tai khoan</p>

                                        </div>
                                        <div className="my-16">
                                            <Button className="!h-[46px]" danger
                                                onClick={() => dispatch(quanLyNguoiDungActions.logout())}>
                                                <i className="fa-solid fa-right-from-bracket"></i>
                                                Dang xuat
                                            </Button>
                                        </div>
                                    </div>
                                }
                                    trigger={"click"}
                                    arrow={false}
                                >
                                    <Avatar size="large"> <i className="fa-regular fa-user text-20"></i>

                                    </Avatar>
                                </Popover>
                                : <p className="flex items-center font-600">
                                    <i className="fa-solid fa-user text-20"></i>
                                    <span className="ml-10 cursor-pointer hover:text-[var(--primary-color)]"
                                        onClick={() => navigate(PATH.login)}>
                                        Đăng nhập
                                    </span>
                                    <span className="inline-block h-[24px] w-[2px] bg-black mx-6"></span>
                                    <span className="cursor-pointer hover:text-[var(--primary-color)]"
                                        onClick={() => navigate(PATH.register)}>
                                        Đăng ký
                                    </span>
                                </p>

                        }
                    </div>
                </div>
            </div>
        </Container>
    )
}

// Styled component
const Container = styled.header`
    height: var(--header-height);
    box-shadow: 0px 16px 10px -5px rgba(0, 0, 0, 0.1);
    
&.header-fixed {
    position: fixed;
    width:100%;
    z-index: 999;
    background-color: #fff
}
    .header-content {
    

        padding: 0 40px;
        max-width: var(--max-width);
        height: 100%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .brand {
            font-weight: 700;
            font-size: 30px;
            &:hover {
                cursor: pointer;
            }
        }
        nav {
            display: flex;
            gap: 60px;
            a {
                font-weight: 500;
                &::after {
                    content: '';
                    display: block;
                    height: 3px;
                    background: var(--primary-color);
                    width: 0;
                    transition: all 0.3s ease-in-out;
                }
                &:hover {
                    &::after {
                        width: 100%;
                    }
                }
            }
        }

        .search {
            border: 1px solid #111;
            display: flex;
            align-items: center;
            border-radius: 6px;
            overflow: hidden;
            button {
                height: 46px !important;
                border: none;
                border-radius: initial;
                background: #111;
                color: #fff;
                &:hover {
                    color: var(--primary-color) !important;
                }
            }
        }

        input {
            margin-top: 0;
            background: transparent;
            color: #111;
            outline: none;
        }
    }
`
