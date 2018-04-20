import * as React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Switch} from "react-router";
import {Screen} from "./views/ScreenComponent";

export default class Routes extends React.Component<{}, {}> {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={`/`} component={Screen}/>
                </Switch>
            </BrowserRouter>
        )
    }
}