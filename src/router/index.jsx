import React from "react";
import {Login, HomePage} from "../containers";
import {Switch, Route} from "react-router-dom";
import {LOGIN_PATH, MAIN_PATH} from "../common/constants";

const Routes = () => (
    <Switch>
        <Route path={LOGIN_PATH} component={Login} />
        <Route path={MAIN_PATH} component={HomePage} />
    </Switch>
);

export default Routes;
