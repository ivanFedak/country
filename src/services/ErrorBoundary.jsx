import {Component} from "react";
import styled from 'styled-components';

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: false
        }
    }

    componentDidCatch(error,info){
        console.log(error,info);
        this.setState({error: true})
    }

    render(){
        if(this.state.error){
            return <Wrapper>
                Some Error in component <br/>
                Try again later
            </Wrapper>
        }
        return this.props.children;  
    }
}

export default ErrorBoundary;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    font-size: 44px;
    text-align: center;
    font-weight: var(--fw-normal);
    color: #ff7373;
`;