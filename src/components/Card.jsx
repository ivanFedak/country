import styled from 'styled-components';


const Card = ({item,info = []}) => {

    const {flags,name,population,region,capital} = item;

    // flags.png
    //name.common
    //population
    //region
    //capital ? capital[0] : 'not found'

    // const link = '';

    return (
        <Cardd>
            <CardImage/>
            <CardBody>
                <CardTitle>Germany</CardTitle>
                <CardList>
                    {info.map(item => (
                        <CardListItem key={item.title}>
                            <b>{item.title}:</b> {item.description}
                        </CardListItem>
                    ))}
                </CardList>
            </CardBody>
        </Cardd>
    )
};

export default Card;

const Cardd = styled.article``;
const CardImage = styled.img``;
const CardBody = styled.div``;
const CardTitle = styled.h3``;
const CardList = styled.ul``;
const CardListItem = styled.li``;
