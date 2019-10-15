import React from 'react';
import Hotel from '../views/hotel/hotel'
import { Switch, Route } from 'react-router-dom';



export default class Router extends React.Component {
    render() {
        return (
            <div className="routers">
                <Switch>
                    <Route path="/container" component={Hotel} />
                    {/* <Redirect to="/user" /> */}
                </Switch>
            </div>
        )
    }
}