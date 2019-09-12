import React from "react";
import {Login, HomePage, } from "../containers";
import {MainLayout } from "../layouts";
import {Switch, Route} from "react-router-dom";
import {LOGIN_PATH, MAIN_PATH, TABLE_PATH} from "../common/constants";
import TablePage from "../containers/TablePage/TablePage";

const Routes = () => (
        <MainLayout>
            <Switch>
                <Route path={LOGIN_PATH} component={Login}/>
                <Route path={MAIN_PATH} component={HomePage}/>
                <Route path={TABLE_PATH} component={TablePage}/>
            </Switch>
        </MainLayout>

);

export default Routes;
