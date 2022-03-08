import styled from 'styled-components';
import Select from 'react-select';

const CustomSelect = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided, //def styles 
            backgroundColor: 'var(--ui-base)',
            borderRadius: 'var(--border-radius)',
            padding: '0.25rem',
            border: 'none',
            boxShadow: 'var(--box-shadow)',
            height: '50px'
        }),
        option: (provided,state) => ({
            ...provided,
            cursor: 'pointer',
            color:  'var(--main-color)',
            backgroundColor: state.isSelected ? 'var(--body-bg)' : 'var(--ui-base)',
        })
    },
})`
    width: 200px;
    border-radius: var(--border-radius);
    font-family: var(--family);
    & > * {box-shadow: var(--box-shadow)}
    & * {color: var(--main-color) !important}
    & input {padding-left: 0.25rem}
    & > div[id] {background-color: var(--ui-base)}
`;

export default CustomSelect;