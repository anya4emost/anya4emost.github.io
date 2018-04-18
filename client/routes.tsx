import * as React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Switch} from "react-router";
import Alphabet from "./views/alphabet";
import {Letter} from "./views/LetterComponent";

export default class Routes extends React.Component<{}, {}> {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path={`/letter/:letter`} component={Letter}/>
                    <Route exact path={`/`} component={Alphabet}/>
                </Switch>
            </BrowserRouter>
        )
    }
}