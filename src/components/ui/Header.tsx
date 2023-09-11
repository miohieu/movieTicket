import styled from "styled-components"

import { NavLink } from 'react-router-dom'
import { Button, Input } from '.'

export const Header = () => {
    return (
        <Container>
            <div className="header-content">
                <h1 className="brand">
                    <span className="text-[var(--primary-color)]">CYBER</span>MOVIE
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
                        <p className="flex items-center font-600">
                            <i className="fa-solid fa-user text-20"></i>
                            <span className="ml-10 cursor-pointer hover:text-[var(--primary-color)]">
                                Đăng nhập
                            </span>
                            <span className="inline-block h-[24px] w-[2px] bg-black mx-6"></span>
                            <span className="cursor-pointer hover:text-[var(--primary-color)]">
                                Đăng ký
                            </span>
                        </p>
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
