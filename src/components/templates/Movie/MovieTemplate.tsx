import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { quanLyPhimService, quanLyRapService } from "services";
import { Movie } from "types/Movie";
import { PosterFilm } from "components";
export const MovieTemplate = () => {

    const { id } = useParams()

    const [movie, setMovie] = useState<Movie>()
    const [movieSchedule, setMovieSchedule] = useState<[]>()

    async function getMovie(id: string) {
        try {
            const data = await quanLyPhimService.getMovieByID(id)
            setMovie(data.data.content)
        } catch (err) {
            console.log(err);

        }
    }

    async function getSchedule(id: string) {
        try {
            const schedule = await quanLyRapService.getMovieScheduleByID(id)
            setMovieSchedule(schedule.data.content.heThongRapChieu)
        } catch (err) {
            console.log(err);

        }
    }
    useEffect(() => {
        getMovie(id)
        getSchedule(id)

        return () => {
        }
    }, [id])

    return (
        <div>
            <PosterFilm
                movieTitle={movie?.tenPhim}
                img={movie?.hinhAnh}
                desc={movie?.moTa}
            />

            <div>{}</div>

        </div>
    )
}

