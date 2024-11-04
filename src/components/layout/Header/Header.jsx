import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Header = () => {

    const navigate = useNavigate();

    return (
        <Wrapper>
            <Logo onClick={() => { navigate("/") }} />
        </Wrapper>
    )
}

const Wrapper = styled.header`
height: 50px;
width: 100%;
background-color: #5C5C5C;
`

const Logo = styled.div`
height: 50px;
width: 50px;
border-radius: 50%;
background-color: crimson;
cursor: pointer;
`

export default Header