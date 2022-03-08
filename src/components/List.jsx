import styled from 'styled-components';

const List = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
};

export default List;

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(265px,1fr));
    gap: 2rem;
    width: 100%;
    padding: 2rem;
    @media (min-width: 767.98px){//more
        gap: 3rem;
        padding: 2.5rem;
    }
    @media (min-width: 991.98px){//more
        gap: 4rem;
    }
`;