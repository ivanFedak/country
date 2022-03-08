import {useState,useEffect} from 'react';
import useCountry from '../api/countryApi';
import Controls from '../components/Form/Controls';
import List from '../components/List';
import Card from '../components/Card';

const Home = () => {

    const [countryList,setCountryList] = useState([]);
    const [filteredCountry,setFilteredCountry] = useState([]);

    const {getAll} = useCountry();

    const hangeSearch = (search,region) => {
        let data = [...countryList];
        if(region)
            data = data.filter(item => item.region === region)
        if(search){
            data = data.filter(item => item.name.common.toLowerCase().includes(search.toLowerCase()))
        }
        setFilteredCountry(data);
    }

    useEffect(() => {
        const filters = ['name','capital','flags','population','region'];
        getAll(filters).then(setCountryList)
        getAll(filters).then(setFilteredCountry)
    //eslint-disable-next-line
    },[])

    const renderCard = filteredCountry.map(item => <Card item={item} key={item.flags.png}/>)

    return (<>
        <Controls onSearch={hangeSearch}/>
        <List renderCard={renderCard}/>
    </>)
};

export default Home;