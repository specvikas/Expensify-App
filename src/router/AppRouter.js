import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './../Components/Header';
import DashboardPage from './../Components/DashboardPage';
import AddExpensePage from './../Components/AddExpensePage';
import EditExpensePage from './../Components/EditExpensePage';
import HelpPage from './../Components/HelpPage';
import NotFoundPage from './../Components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter >
        <div>
            <Header /> 
            <Switch>
                <Route  path="/" component={DashboardPage} exact={true}/>
                <Route  path="/create" component={AddExpensePage} exact={true}/>
                <Route  path="/edit/:id" component={EditExpensePage} exact={true}/>
                <Route  path="/help" component={HelpPage} exact={true}/>
                <Route  component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;