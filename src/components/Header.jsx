import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Container from './Container';
import {IoMoon,IoMoonOutline} from 'react-icons/io5'

const Header = (props) => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect(()=>{
        document.body.setAttribute('data-theme', theme);
    },[theme])

    return(
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where in the world?</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === 'light' ? <IoMoonOutline/> : <IoMoon/> }
                        <span>{theme} Theme</span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    )
}

export default Header;


const HeaderEl = styled.header`
    box-shadow: var(--box-shadow);
    background-color: var(--ui-base);
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
    font-size: 22px;
    @media (max-width: 767.98px){ //less
        font-size: 18px
    }
    @media (max-width: 479.98px){
        font-size: 15px
    }
`;
const Title = styled(Link).attrs({
    to: '/'
})`
    font-weight: var(--fw-bold);
`;
const ModeSwitcher = styled.div`
    display: flex;
    align-items: center;
    color: var(--main-color);
    cursor: pointer;
    font-weight: var(--fw-bold);
    text-transform: capitalize;
    span{
        margin-left: 0.75rem
    }
`;