import { Header, Footer } from "components"
import { Outlet } from "react-router-dom"
import styled from "styled-components"
const MainLayout = () => {
  return (
    <main>
    <Header/>
    <MainWrapper id="main-content">
    <Outlet />
    </MainWrapper>
    <Footer />
    </main>
  )
}

const MainWrapper = styled.div`
max-width: var(--max-width);
margin: auto;
padding: 20px 10px
`

export default MainLayout
