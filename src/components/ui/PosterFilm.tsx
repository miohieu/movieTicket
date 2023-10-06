import styled from "styled-components"

export const PosterFilm = ({ movieTitle, desc, img }) => {
    return (
        <div className="h-screen">

            <Poster className="poster">
                <div className="poster heading">
                    <h1 className="text-title">{movieTitle}</h1>
                </div>
                <div className="moveImage">
                    <img src={img} className="w-[400px] h-[500px] " />

                </div>
                <div className="poster heading">
                    <p>{desc}</p>
                </div>
            </Poster>
        </div>
    )
}

const Poster = styled.div`
width: 40%;
height: 800px;

`
