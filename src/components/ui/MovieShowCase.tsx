import { Card } from "./Card"
import { useAppSelector } from "store"
import { Image } from "antd"

export const MovieShowCase = () => {
    const { movieList, isFetchingMovie } = useAppSelector((state) => state.quanLyPhim)
    return (
        <div className="grid grid-cols-4">
            {movieList?.map(movie => <div key={movie.maPhim}>
                <Card hoverable
                    style={{ width: 440}}
                    cover={<Image className="object-cover" alt="movies" src={movie.hinhAnh} height={540}/>}
                    >

                <Card.Meta title={movie.tenPhim}
                    description={movie.moTa.substring(0, 300)}/>
                </Card>


            </div>)}

        </div>
    )
}

