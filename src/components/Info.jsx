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

const Wrapper = styled.div``;
const InfoImage = styled.img``;
const InfoTitle = styled.h2``;
const ListGroup = styled.div``;
const List = styled.ul``;
const ListItem = styled.li``;
const Meta = styled.div``;
const TagGroup = styled.div``;
const Tag = styled.span``;