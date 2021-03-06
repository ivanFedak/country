import {useState,useEffect} from "react";
import styled from 'styled-components';
import Search from "./Search";
import CustomSelect from "./CustomSelect";

const options = [
    {value:'Africa',label:'Africa'},
    {value:'Americas',label:'Americas'},
    {value:'Asia',label:'Asia'},
    {value:'Europe',label:'Europe'},
    {value:'Oceania',label:'Oceania'},
]

const Controls = ({onSearch}) => {

    const [search,setSearch] = useState('');
    const [region,setRegion] = useState('');

    useEffect(() => {
        const reg = region ? region.value : '';
        onSearch(search,reg)
    //eslint-disable-next-line
    },[search,region])

    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch}/>
            <CustomSelect 
                    options={options} placeholder="Filter by Region" 
                    isClearable isSearchable={false} 
                    value={region} onChange={setRegion}
            />
        </Wrapper>
    )
};

export default Controls;

const Wrapper = styled.div`
    position: relative;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (min-width: 767.98px){//more
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;