import {Switch,Route} from "react-router-dom";
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import NotFound from '../pages/NotFound';

const Routes = () => {
    return (
        <Switch>
            <Route exact path={'/detail/:name'} component={Detail}/>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'*'} component={NotFound}/>
        </Switch>
    )
}

export default Routes;