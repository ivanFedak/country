import styled from 'styled-components';

const List = ({renderCard}) => {
    return (
        <Wrapper>
            {renderCard}
        </Wrapper>
    )
};

export default List;

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px,1fr));
    width: 100%;
    padding: 1rem;
    @media (min-width: 479.98px){//more
        gap: 1rem;
    }
    @media (min-width: 767.98px){//more
        grid-template-columns: repeat(auto-fill, minmax(195px,1fr));
        gap: 3rem;
        padding: 1.5rem;
    }
    @media (min-width: 991.98px){//more
        grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
        gap: 4rem;
        padding: 2rem;
    }
`;