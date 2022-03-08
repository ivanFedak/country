import Header from './Header';
import Routes from '../config/Routes';
import Main from './Main';


const App = () => {
    
    return(<>
        <Header/>
        <Main>
            <Routes/>
        </Main>
    </>)
}
export default App;