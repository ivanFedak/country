import {Switch,Route} from "react-router-dom";
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import NotFound from '../pages/NotFound';
import ErrorBoundary from '../services/ErrorBoundary';

const Routes = () => {
    return (
        <Switch>
            <Route exact path={'/detail/:name'}>
                <ErrorBoundary>
                    <Detail/>
                </ErrorBoundary>
            </Route>
            <Route exact path={'/'}>
                <ErrorBoundary>
                    <Home/>    
                </ErrorBoundary>
            </Route>
            <Route exact path={'*'} component={NotFound}/>
        </Switch>
    )
}

export default Routes;