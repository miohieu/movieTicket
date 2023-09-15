import { RouteObject } from 'react-router-dom'
import { PATH } from 'constant'
import { AuthLayout } from 'components'
import { Login, Register } from 'pages'
import Home from 'pages/Home'
import MainLayout from 'components/layouts/MainLayout'
import Account from 'pages/Account'

export const router: RouteObject[] = [
    {
        path: PATH.home,
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: PATH.account,
                element: <Account/>
            }
        ]
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: PATH.login,
                element: <Login />,
            },
            {
                path: PATH.register,
                element: <Register />,
            },
        ],
    },
]
