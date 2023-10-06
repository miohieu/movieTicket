
import { Card } from "components/ui/Card"
import { useAppSelector } from "store"
import { Image } from "antd"
import { Skeleton, Button } from "components"
import { useEffect } from "react"
import { useAppDispatch } from "store"
import { getMovieListThunk } from "store/quanLyPhim/thunk"
import { useNavigate } from "react-router-dom"

export const HomeTemplate = () => {
    const { movieList, isFetchingMovie } = useAppSelector((state) => state.quanLyPhim)


    const dispatch = useAppDispatch()
    const navigate = useNavigate()


    useEffect(() => { dispatch(getMovieListThunk()) }, [dispatch])

    if (isFetchingMovie) {
        return (
            <div className="grid grid-cols-4">

                {
                    [...Array(12)].map(() => (
                        <Card className="!w-[300px] !mt-20">
                            <Skeleton.Image className="!w-full !h-[250px]" />
                            <Skeleton.Input className="!w-full mt-16" />
                            <Skeleton.Input className="!w-full mt-16" />
                            <Skeleton.Button className="mt-16" />
                        </Card>
                    )
                    )
                }
            </div>)
    }

    return (
        <div className="grid grid-cols-4">
            {movieList?.map(movie => (<div key={movie.maPhim}>
                <Card hoverable
                    style={{ width: 340 }}
                    cover={<Image className="object-cover" alt="movies" src={movie.hinhAnh} height={540} />}
                >

                    <Card.Meta title={movie.tenPhim}
                        description={movie.moTa.substring(0, 30)} />

                    <Button onClick={() => {navigate(`movie/${movie.maPhim}`)}}>
                        Dat ve
                    </Button>
                </Card>
            </div>))}

        </div>
    )
}

