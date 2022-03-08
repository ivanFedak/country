import styled from 'styled-components';

const Info = (props) => {

    const {name,nativeName,flag,capital,population,region,subregion,topLevelDomain,
           currencies=[],languages=[],borders=[],push} = props;
    
    return (
        <Wrapper>
            <InfoImage>
                <img src={'https://flagcdn.com/w320/ca.png'} alt="canada"/>    
            </InfoImage>
            {/* <InfoImage src={flag} alt={name}/> */}
            <InfoBody>
                <InfoTitle>Ukraine</InfoTitle>
                {/* <InfoTitle>{name}</InfoTitle> */}
                <ListGroup>
                    <List>
                        <ListItem>Native Name: <span>ukraine</span></ListItem>
                        <ListItem>Population: <span>13432</span></ListItem>
                        <ListItem>Region: <span>Europe</span></ListItem>
                        <ListItem>Sub Region: <span>Euro</span></ListItem>
                        <ListItem>Capital: <span>Kiev</span></ListItem>
                        {/* <ListItem><b>Native Name:</b>{nativeName}</ListItem>
                        <ListItem><b>Population:</b>{population}</ListItem>
                        <ListItem><b>Region:</b>{region}</ListItem>
                        <ListItem><b>Sub Region:</b>{subregion}</ListItem>
                        <ListItem><b>Capital:</b>{capital}</ListItem> */}
                    </List>
                    <List>
                        <ListItem>Top Level Domain:<span>.tb</span></ListItem>
                        <ListItem>Currencies:<span>usd</span></ListItem>
                        <ListItem>languages:<span>uk</span></ListItem>
                        {/* <ListItem><b>Top Level Domain:</b>{topLevelDomain.map((item => <span key={item}>{item}</span>))}</ListItem>
                        <ListItem><b>Currencies:</b>{currencies}</ListItem>
                        <ListItem><b>languages:</b>{languages}</ListItem> */}
                    </List>
                </ListGroup>
                <Meta>
                    Border Countries:
                    {!borders.length ? 'Not borders' : (
                        <TagGroup>
                            {borders.map(item => <Tag key={item}>{item}</Tag>)}
                        </TagGroup>
                    )}
                </Meta>
            </InfoBody>
        </Wrapper>
    )
};

export default Info;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    @media (max-width: 767.98px){//Less 768
        flex-direction: column;
        align-items: flex-start;
    }
`;
const InfoImage = styled.div`
    position: relative;
    flex: 0 1 45%;
    padding-bottom: 25%;
    @media (max-width: 767.98px){//Less 768
        width: 100%;
        padding-bottom: 59%;
    }
    img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
    }
`;
const InfoBody = styled.div`
    flex: 1 1 50%;
    padding-left: 100px;
    @media (max-width: 991.98px){
        padding-left: 50px;
    }
    @media (max-width: 767.98px){//Less 768
        padding: 30px 0 0 0;
    }
`;
const InfoTitle = styled.h2`
    font-weight: 800;
    font-size: 33px;
    margin-bottom: 40px;
    @media (max-width: 767.98px){//Less 768
        margin-bottom: 20px;
    }
`;
const ListGroup = styled.div`
    display: flex;
    gap: 40px;
    @media (max-width: 767.98px){//Less 768
        flex-direction: column;
    }
`;
const List = styled.ul`
    flex: 0 1 50%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    font-weight: var(--fw-normal);
    margin-bottom: 15px;
    span {
        font-weight: 300;
        padding-left: 15px;
    }
`;
const Meta = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 17px;
    @media (max-width: 767.98px){//Less 768
        flex-direction: column;
        font-size: 19px;
        align-items: flex-start
    }
    ///
`;
const TagGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 10px;
    margin-left: 15px;
    @media (max-width: 767.98px){//Less 768
        margin: 10px 0 0 0
    }
`;
const Tag = styled.span`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 5px;
    background-color: var(--ui-base);
    border-radius: 2px;
    transition: all 0.3s ease 0s;
`;