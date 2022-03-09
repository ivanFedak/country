import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Button} from '../components/Button';

const NotFound = () => {
    return (
        <Wrapper>
            <Text>404 Error</Text>
            <Descr>Page don't exist,but u can go to main page</Descr>
            <Link to={'/'}>
                <Btn>Main Page</Btn>
            </Link>
        </Wrapper>
    )
};

export default NotFound;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Text = styled.h2`
    font-size: 120px;
    @media (max-width: 767.98px){
        font-size: 70px;
    }
    @media (max-width: 479.98px){
        font-size: 50px
    }
`;
const Descr = styled.div`
    opacity: 0.8;
    text-align: center;
    @media (min-width: 767.98px){
        font-size: 20px
    }
    @media (max-width: 479.98px){
        font-size: 12px
    }
`;

const Btn = styled(Button).attrs({
    to: '/'
})`
    width: 250px;
    text-align: center;
    justify-content: center;
    margin-top: 20px;
`;

// sketch:type TO sketchtype
// xmlns:xlink TO xmlnsxlink
// xlink:href  TO xlinkHref
//stroke-width TO strokeWidth