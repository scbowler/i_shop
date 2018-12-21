import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AccountRoutes from './account';
import NotFound from './general/404'
import Nav from './nav';

const App = () => (
    <div>
        <Nav/>
        <div className="container">
            <Switch>
                <Route path="/account" component={AccountRoutes}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </div>
);

export default App;
