
import styled from 'styled-components';
import Container from './Container';
import {IoMoon,IoMoonOutline} from 'react-icons/io5'


const Header = (props) => {

    return(
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where in the world?</Title>
                    <ModeSwitcher>
                        <IoMoon/> Light Theme
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
const Wrapper = styled.div``;
const Title = styled.a.attrs({
    href: '/'
})``;
const ModeSwitcher = styled.div``;