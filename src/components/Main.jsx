import styled from 'styled-components';
import Container from './Container';

const Main = ({children}) => {
    return (
        <Wrapper>
            <Container>
                {children}
            </Container>
        </Wrapper>
    )
}

export default Main;

const Wrapper = styled.main`
    padding: 2rem 0;
    @media (min-width: 767.98px){//more
        padding: 4rem 0;
    }
`;