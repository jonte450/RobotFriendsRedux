import React, { Component } from 'react';
import {Link,Route,Switch} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CardList from '../components/CardList';
import {setName,addRobot} from '../actions';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Home from '../components/Home';
import {connect} from 'react-redux';
import AddRobot from '../components/AddRobot';
import UppdateRobot from '../components/UpdateRobot';
import DeleteRobot from '../components/DeleteRobot';
import './App.css';


function App({robots,name,nameChange,addToList})  {

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
  <nav className="bt bb tc mw7 center mt4 flex" >
    <Link to={'/about'} className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l">About page</Link>
    <Link to={'/addRobo'} className="nav-link f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l">Add robot</Link>
    <Link to={'/updateRobo'} className="nav-link f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l">Update robot</Link>
    <Link to={'/searchRobo'} className="nav-link f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l">Search robot</Link>
    <Link to={'/delRobo'} className="nav-link f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l">Delete robot</Link>
  </nav>
</header>
      <Switch>

      <Route 
      path='/about'
      component={Home}/>

      <Route 
      path='/addRobo'
      render={props => <AddRobot {...props} name={name} nameChange={nameChange} addToList={addToList}/>}
      />

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

const mapStateToProps = (state) =>{
  return {
    robots: state.manage_data.robots,
    name: state.manage_data.name
  }
}

const mapDispachToProps = (dispatch) =>{
  return {
    nameChange:(event) => dispatch(setName(event.target.value)),
    addToList: () => dispatch(addRobot())
  }
}


export default connect(mapStateToProps,mapDispachToProps)(App);


      
   //{routes.map(({id, path, component: Component }) => (
   //<Route
   // key={id}
   // path={path}
   // component={Component} // sans the angle brackets </>
  ///>))
///}   