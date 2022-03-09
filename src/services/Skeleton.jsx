import styled from 'styled-components';


const Skeleton = () => {

    const arr = [0,1,2,4,5,6,7,8,9,10,11,12];


    const skeleton = arr.map(item=>(
        <Skelet key={item}>
            <Poster/>
            <Content>
                <Title/>   
                <Text/>
            </Content>
        </Skelet>  
    ))


    return (<>
        {skeleton}
    </>)
}

export default Skeleton;

const Skelet = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    /* padding: 9px 6px; */
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--box-shadow);
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 15px;
        height: 100%;
        filter: blur(30px);
        opacity: 0.8;
        background: #5e5e5e;
        animation: load 1s linear infinite;
    }
`;
const Poster = styled.div`
    width: 100%;
    height: 141px;
    background-color: var(--ui-base);
    animation: loadOp 0.5s linear infinite alternate;
    border-radius: 10px 10px 0px 0px;
    box-shadow: var(--box-shadow);
`
const Content = styled.div`
    width: 100%;
    padding: 1rem;
    background-color: var(--body-bg);
`;
const Title = styled.div`
    height: 25px;
    background-color: var(--ui-base);
    animation: loadOp 0.5s linear infinite alternate;
    box-shadow: var(--box-shadow);
`;
const Text = styled.div`
    margin-top: 20px;
    height: 80px;
    background-color: var(--ui-base);
    animation: loadOp 0.5s linear infinite alternate;
    box-shadow: var(--box-shadow);
`;