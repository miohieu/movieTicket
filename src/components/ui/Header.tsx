import styled from "styled-components"

export const Header = () => {
    return (
        <Container>
            <div className="header-content"></div>
            <div className="logo">Logo</div>
        </Container>
    )
}

const Container = styled.header`
background-color: red;
height: var(--header-height);
.header-content {
    max-width: var(--max-width);
}

.logo {
    width: 100px,
    height: 100px

}
`
