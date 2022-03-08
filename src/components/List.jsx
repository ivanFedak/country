import {useState,useEffect} from 'react';
import styled from 'styled-components';
import useCountry from '../api/countryApi';
import Card from './Card';

const List = () => {

    const [countryList,setCountryList] = useState([]);
    const {getAll} = useCountry(); 

    useEffect(() => {
        getAll().then(setCountryList)
    //eslint-disable-next-line
    },[])


    const renderCard = countryList.map(item => <Card item={item} key={item.flags.png}/>)

    return (
        <Wrapper>
            {renderCard}
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