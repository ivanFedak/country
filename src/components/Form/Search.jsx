import styled from 'styled-components';
import {IoSearch} from 'react-icons/io5';

const Search = ({search,setSearch}) => {
  return (
    <InputContainer>
        <IoSearch/>
        <Input  onChange={(e) => setSearch(e.target.value)} value={search}/>
    </InputContainer>
  )
}

export default Search;

const InputContainer = styled.label`
    display: flex;
    align-items: center;
    padding: 1rem 1rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    width: 100%;
    margin-bottom: 1.5rem;
    @media (min-width: 767.98px){//more
        margin-bottom: 0;
        width: 480px;
    }
`;
const Input = styled.input.attrs({
    type:'text',
    placeholder: 'Search for a country...' 
})`
    width: 100%;
    margin-left: 2rem;
    background-color: var(--body-bg);
    color: var(--main-color);
    &::placeholder{
        color: var(--main-color);
        opacity: 0.5;
    }
`;