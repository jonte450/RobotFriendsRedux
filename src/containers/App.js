import React, { Component } from 'react';
import {Link,Route,Switch} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { setSearchField, requestRobots} from '../actions';
import CardList from '../components/CardList';
import {useSelector,useDispatch} from 'react-redux';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Home from '../components/Home';
import {connect} from 'react-redux';
import AddRobot from '../components/AddRobot';
import UppdateRobot from '../components/UpdateRobot';
import DeleteRobot from '../components/DeleteRobot';
import './App.css';


function App({robots})  {
        const routes = [{
                id: 1,
                path:'/about',
                component:Home
                },
                {
                id: 2,
                path:'/addRobo',
                component:AddRobot
                },
                {
                id: 3,
                path:'/updateRobo',
                component:UppdateRobot
                },
                {
                id: 4,
                path:'/searchRobo',
                component: SearchBox
                },
                {
                id: 5,
                path:'/delRobo',
                component: DeleteRobot
                }
                ];

    const stylecur = {fill:'currentcolor'};                
    return (
      <Router>
      <div className='tc'>
      
        <header className="bg-white black-80 tc pv4 avenir">
  <a href="/" className="bg-black-80 ba b--black dib pa3 w2 h2 br-100">
    <svg className="white" data-icon="skull" viewBox="0 0 32 32" style={stylecur}>
    <title>skull icon</title><path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"></path></svg>
  </a>
  <h1 className="mt2 mb0 baskerville i fw1 f1">RoboFriends</h1>
  <h2 className="mt2 mb0 f6 fw4 ttu tracked">Create an ensembe of Robot with your friends!</h2>
  <nav className="bt bb tc mw7 center mt4" >
    <Link to={'/about'} className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l">About This Page</Link>
    <Link to={'/addRobo'} className="nav-link f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l">Add Robot</Link>
    <Link to={'/updateRobo'} className="nav-link f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l">Update Robot</Link>
    <Link to={'/searchRobo'} className="nav-link f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l">Search Robot</Link>
    <Link to={'/delRobo'} className="nav-link f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l">Delete Robot</Link>
  </nav>
</header>
      <Switch>
   {routes.map(({id, path, component: Component }) => (
   <Route
    key={id}
    path={path}
    component={Component} // sans the angle brackets </>
  />))
}         

      </Switch>  
        <Scroll>{
            <ErrorBoundry>
              <CardList robots={robots}/>
            </ErrorBoundry>
          }
        </Scroll>
      </div>
      </Router>
    );
  }

const mapStateToProps = state =>{
  return {
    robots: state.manage_data.robots
  }
}


export default connect(mapStateToProps,null)(App);