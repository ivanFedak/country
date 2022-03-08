import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = ({item}) => {

    const {name,capital,flags,population,region} = item;

    const info = [
        {
            title: 'Population',
            info: population,
        },
        {
            title: 'Region',
            info: region,
        },
        {
            title: 'Capital',
            info: capital,
        }
    ]

    const link = `/detail/${name.common}`;

    return (
        <Cardd>
            <Link to={link}>
                <CardImage>
                    <img src={flags.png} alt={name.common}/>
                </CardImage>
                <CardBody>
                    <CardTitle>{name.common}</CardTitle>
                    <CardList>
                        {info.map(item => (
                            <CardListItem key={item.title}>
                                <b>{item.title}:</b> {item.info}
                            </CardListItem>
                        ))}
                    </CardList>
                </CardBody>
            </Link>
        </Cardd>
    )
};

export default Card;

const Cardd = styled.article`
    border-radius: var(--border-radius);
    background-color: var(--ui-base);
    box-shadow: var(--box-shadow);
    cursor: pointer;
    overflow: hidden; 
`;
const CardImage = styled.div`
    position: relative;
    z-index: 1;
    padding-bottom: 60%;
    img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
    }
`;
const CardBody = styled.div`
    padding: 1rem 1.5rem 1.5rem;
    @media (max-width: 991.98px){
        padding: 1rem;
    }
`;
const CardTitle = styled.h3`
    font-size: var(--fs-md);
    font-weight: var(--fw-bold);
`;
const CardList = styled.ul`
    padding: 1rem 0 0;
`;
const CardListItem = styled.li`
    font-size: var(--fs-sm);
    line-height: 1.5;
    font-weight: var(--fw-light);
    & > b {
        font-weight: var(--fw-bold);
    }
`;
