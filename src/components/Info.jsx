import styled from 'styled-components';

const Info = (props) => {

    const {name,nativeName,flag,capital,population,region,subregion,topLevelDomain,
           currencies=[],languages=[],borders=[],push} = props;
    
    return (
        <Wrapper>
            <InfoImage src={'https://flagcdn.com/w320/ca.png'} alt={'canada'}/>
            {/* <InfoImage src={flag} alt={name}/> */}
            <div>
                <InfoTitle>Ukraine</InfoTitle>
                {/* <InfoTitle>{name}</InfoTitle> */}
                <ListGroup>
                    <List>
                        <ListItem><b>Native Name:</b>ukraine</ListItem>
                        <ListItem><b>Population:</b>13432</ListItem>
                        <ListItem><b>Region:</b>Europe</ListItem>
                        <ListItem><b>Sub Region:</b>Euro</ListItem>
                        <ListItem><b>Capital:</b>Kiev</ListItem>
                        {/* <ListItem><b>Native Name:</b>{nativeName}</ListItem>
                        <ListItem><b>Population:</b>{population}</ListItem>
                        <ListItem><b>Region:</b>{region}</ListItem>
                        <ListItem><b>Sub Region:</b>{subregion}</ListItem>
                        <ListItem><b>Capital:</b>{capital}</ListItem> */}
                    </List>
                    <List>
                        <ListItem><b>Top Level Domain:</b>.tb</ListItem>
                        <ListItem><b>Currencies:</b>usd</ListItem>
                        <ListItem><b>languages:</b>uk</ListItem>
                        {/* <ListItem><b>Top Level Domain:</b>{topLevelDomain.map((item => <span key={item}>{item}</span>))}</ListItem>
                        <ListItem><b>Currencies:</b>{currencies}</ListItem>
                        <ListItem><b>languages:</b>{languages}</ListItem> */}
                    </List>
                </ListGroup>
                <Meta>
                    <b>Border Countries</b>
                    {!borders.length ? <span>Not borders</span> : (
                        <TagGroup>
                            {borders.map(item => <Tag key={item}>{item}</Tag>)}
                        </TagGroup>
                    )}
                </Meta>
            </div>
        </Wrapper>
    )
};

export default Info;

const Wrapper = styled.div`
    display: grid;
    width: 100%;
    margin-top: 3rem;
    grid-template-columns: 100%;
    gap: 2rem;
    @media (min-width: 767.98px){
        grid-template-columns: minmax(100px,400px) 1fr;
        align-items: center;
        gap: 5rem; 
    }
    @media (min-width: 991.98px){
        grid-template-columns: minmax(400px,600px) 1fr;
    }
`;
const InfoImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`;
const InfoTitle = styled.h2`
    font-size: 43px;
    font-weight: var(--fw-bold);
`;
const ListGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media (min-width: 991.98px){
        flex-direction: row;
        gap: 4rem;
    }
`;
const List = styled.ul``;
const ListItem = styled.li`
    line-height: 1.8;
    & > b {
        font-weight: var(--fw-normal);
        padding-right: 5px;
    }
`;
const Meta = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 3rem;
    & > b {
        font-weight: var(--fw-bold);
    }
    @media (min-width: 767.98px){
        flex-direction: row;
        align-items: center;
    }
`;
const TagGroup = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;
const Tag = styled.span`
    padding: 0 1rem;
    background-color: var(--ui-base);
    box-shadow: var(--box-shadow);
    line-height: 1.5;
    font-weight: var(--fw-bold);
    cursor: pointer;
`;