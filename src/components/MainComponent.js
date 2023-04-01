import React from 'react';

import Header from './HeaderComponent'
import ViewAllHiking from './components/ViewAllHiking'
import ViewAllCamping from './components/ViewAllCamping'
import AddNewCamp from './components/AddNewCamp'
import AddNewHike from './components/AddNewHike'
// import Home from './components/HomeComponent'
import Home from './components/home'

import {Switch,Route,Redirect,withRouter} from 'react-router-dom'

const LandingPage = () => {
    return (
        <>
        <Header/>
        <h1>Main components page</h1>
        <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/hikingviewall' component={ViewAllHiking}/>
            <Route path='/campingviewall' component={ViewAllCamping}/>
            <Route path='/addnewhike' component={AddNewHike}/>
            <Route path='/addnewcamp' component={AddNewCamp}/>
            <Redirect to='/home'/>
        </Switch>


        
    
        </>
    );

}

export default withRouter(LandingPage);