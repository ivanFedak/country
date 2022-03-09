import {useState,useEffect} from "react";
import {useParams,useHistory} from "react-router-dom";
import useCountry from "../api/countryApi";
import Info from "../components/Info";
import Loading from "../services/Loading";
import ErrorCatch from '../services/ErrorCatch';
import {Button} from "../components/Button";
import {IoArrowBack} from 'react-icons/io5';

const Detail = () => {

    const [country,setCountry] = useState(null);
    const {name} = useParams();
    const {push,goBack} = useHistory();
    const {getByName,process} = useCountry();

    useEffect(() => {
        getByName(name)
            .then(res => setCountry(res[0]))
            .catch(e => console.log(`fetch error (detail),error -${e}`))
    //eslint-disable-next-line
    },[name]);

    if(process === 'error') return <ErrorCatch/>
    if(!country) return <Loading/>


    return (
        <div>
            <Button onClick={goBack}>
                <IoArrowBack/> Back
            </Button>
            <Info push={push} {...country}/>
        </div>
    )
};

export default Detail;