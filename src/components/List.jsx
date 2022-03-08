import {useState,useEffect} from 'react';
import styled from 'styled-components';
import useCountry from '../api/countryApi';
import Card from './Card';

const List = () => {

    const [countryList,setCountryList] = useState([]);
    const {getAll} = useCountry(); 

    useEffect(() => {
        const filters = ['name','capital','flags','population','region'];
        getAll(filters).then(setCountryList)
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
    grid-template-columns: repeat(auto-fill, minmax(210px,1fr));
    width: 100%;
    padding: 1rem;
    @media (min-width: 479.98px){
        gap: 1rem;
    }
    /* @media (min-width: 644.98px){//more
        grid-template-columns: repeat(auto-fill, minmax(20px,1fr));
    } */
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