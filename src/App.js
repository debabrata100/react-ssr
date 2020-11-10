import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../config/routes';

import './App.css';

const App = () => {
    return (
        <Switch>
            {
                routes.map(route => (
                    <Route key={route.path} {...route} />
                ))
            }
        </Switch>
    );
}

export default App;
