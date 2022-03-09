import styled from 'styled-components';

const ErrorCatch = () => {
    return (
        <Wrapper>
            There's some error in the server side
        </Wrapper>
    )
};

export default ErrorCatch;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    font-size: 22px;
    font-weight: var(--fw-normal)
`