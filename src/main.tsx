import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

//toast message
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

// antd
import { StyleProvider } from '@ant-design/cssinjs'

// redux
import { Provider } from 'react-redux'
import { store } from 'store'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ToastContainer position="top-right" />
        <StyleProvider hashPriority="high">
            <Provider store={store}>
                <App />
            </Provider>
        </StyleProvider>
    </BrowserRouter>
)
