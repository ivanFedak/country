import {useEffect,useRef} from 'react';
import styled from 'styled-components';

const Loading = () => {

    const titleRef = useRef(null);
    const hrRef = useRef(null);

    useEffect(() => {
        let counter = 0;
        let c = 0;
        const intr = setInterval(function(){
            titleRef.current.innerHTML = `${c}%`;
            hrRef.current.style.width = `${c}%`;
            counter++;
            c++;              
            if(counter === 101) clearInterval(intr);
        }, 20);
        
        return () => {clearInterval(intr)}
    },[])


  



    return (
        <Load>
            <Counter>
                <Text>loading</Text>
                <Procents ref={titleRef}>0%</Procents>
                <Line ref={hrRef}/>
            </Counter>
        </Load>
    )
};

export default Loading;

const Load = styled.div`
    background-color: var(--body-bg);
    width: 100vw;
    height: 88vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: -4rem -15px;
`;
const Counter = styled.div`   
    text-align: center;
`;
const Text = styled.p`
    font-size: 50px;
    font-weight: 600;
    color: #f60d54;
`;
const Procents = styled.h2`
    color: var(--main-color);
    font-size: 90px;
    margin-top: -10px;
`;
const Line = styled.hr`
    background: #f60d54;
    border: none;
    height: 4px;
`;