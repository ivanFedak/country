import styled from 'styled-components';

const Info = (props) => {

    const {name,flags,capital,population,region,subregion,tld,
           currencies=[],languages=[],borders=[]} = props;
    
    const capit = capital ? capital[0] : 'capital undefined';
    const domains = tld ? tld.map(item => `${item}`) : '.undefined';
    const native = Object.entries(name.nativeName)[0][1].common;
    const lang = Object.entries(languages).map(item => item[0]).join(' ');
    const curren =  Object.entries(currencies)[0][0];
    

    return (
        <Wrapper>
            <InfoImage>
                <img src={flags.png} alt={name.common}/>    
            </InfoImage>
            <InfoBody>
                <InfoTitle>{name.common}</InfoTitle>
                <ListGroup>
                    <List>
                        <ListItem>Native Name: <span>{native}</span></ListItem>
                        <ListItem>Population: <span>{population}</span></ListItem>
                        <ListItem>Region: <span>{region}</span></ListItem>
                        <ListItem>Sub Region: <span>{subregion}</span></ListItem>
                        <ListItem>Capital: <span>{capit}</span></ListItem>
                    </List>
                    <List>
                        <ListItem>Top Level Domains:<span>{domains}</span></ListItem>
                        <ListItem>Currencies:<span>{curren}</span></ListItem>
                        <ListItem>languages:<span>{lang}</span></ListItem>
                    </List>
                </ListGroup>
                <Meta>
                    Border Countries:
                    {!borders.length ? 'Not borders' : (<TagGroup>{borders.map(item => <Tag key={item}>{item}</Tag>)}</TagGroup>)}
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
        width: 80%;
        padding-bottom: 45%;
        /* width: 100%;
        padding-bottom: 59%; */
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
        flex: 1 1 70%
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
        @media (max-width: 991.98px){
            padding-left: 7px
        }
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