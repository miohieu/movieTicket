import { Header, Footer } from "components"
import { useEffect } from "react"
import { useAppDispatch} from "store"
import { getMovieListThunk } from "store/quanLyPhim/thunk"

export const HomeTemplate = ({children}) => {
    const dispatch = useAppDispatch()

    useEffect(() => {dispatch(getMovieListThunk())}, [dispatch])

    return ( <div>
<Header></Header>
{children}
<Footer></Footer>

    </div>
  )
}

