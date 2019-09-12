import React from "react";
import {Login, HomePage} from "../containers";
import {Switch, Route} from "react-router-dom";
import {LOGIN_PATH, MAIN_PATH, TABLE_PATH} from "../common/constants";
import Header from "../containers/Header/Header"
import TablePage from "../containers/TablePage/TablePage";

const Routes = () => (
    <Switch>
        <div>
            <Header/>
            <Route path={LOGIN_PATH} component={Login}/>
            <Route path={MAIN_PATH} component={HomePage}/>
            <Route path={TABLE_PATH} component={TablePage}/>
        </div>
    </Switch>
);

export default Routes;
