import {useState,useEffect} from "react";
import {useParams,useHistory} from "react-router-dom";
import useCountry from "../api/countryApi";
import Info from "../components/Info";
import {Button} from "../components/Button";
import {IoArrowBack} from 'react-icons/io5';

const Detail = () => {

    const [country,setCountry] = useState(null);
    const {name} = useParams();
    const {push,goBack} = useHistory();
    const {getByName} = useCountry();

    useEffect(() => {
        getByName(name).then(res => setCountry(res[0]));
    //eslint-disable-next-line
    },[name]);

    if(!country) return <h2>Loading...</h2>
    console.log(country)

    console.log(country)
    // const {name.common} = country;

    return (
        <div>
            <Button onClick={goBack}>
                <IoArrowBack/> Back
            </Button>
            <Info {...country}/>
        </div>
    )
};

export default Detail;