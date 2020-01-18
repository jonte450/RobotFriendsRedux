import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots , setName, setUserName, setEmail, addRobot, updateRobot,deleteRobot} from '../actions';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import AddRobot from '../components/AddRobot';
import UppdateRobot from '../components/UpdateRobot';
import DeleteRobot from '../components/DeleteRobot';
import NavBar from '../components/NavBar.js';


import './App.css';

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.manage_data.robots,
    isPending: state.manage_data.isPending,
    name: state.manage_data.name,
    username: state.manage_data.username,
    email: state.manage_data.email,
  }
}

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
    get_name: (event) => dispatch(setName(event.target.value)),
    get_username: (event) => dispatch(setUserName(event.target.value)),
    get_email: (event) => dispatch(setEmail(event.target.value)),
    add_robot: () => dispatch(addRobot()),
    uppdate_robot: ()=> dispatch(updateRobot())
  }
}

class App extends Component {
  componentDidMount() {
    console.log(this.props.userinfo);
    this.props.onRequestRobots();
  }

  render() {
    const {robots, searchField, onSearchChange, isPending,get_name,name, get_username,username,get_email,email,add_robot,uppdate_robot} = this.props;
      const stylecur = {fill:'currentcolor'};
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
      <div className='tc'>

        <header className="bg-white black-80 tc pv4 avenir">
  <a href="" className="bg-black-80 ba b--black dib pa3 w2 h2 br-100">
    <svg className="white" data-icon="skull" viewBox="0 0 32 32" style={stylecur}>
    <title>skull icon</title><path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"></path></svg>
  </a>
  <h1 className="mt2 mb0 baskerville i fw1 f1">RoboFriends</h1>
  <h2 className="mt2 mb0 f6 fw4 ttu tracked">Create an ensembe of Robot with your friends!</h2>
  <nav className="bt bb tc mw7 center mt4">
    <a className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" href="/">Home</a>
    <a className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" href="/portfolio">Add Robot</a>
    <a className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" href="/shop">Update Robot</a>
    <a className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l" href="/about">Search Robot</a>
    <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/contact">Delete Robot</a>
  </nav>
</header>                                               
        <AddRobot  get_name={get_name} get_username={get_username} get_email={get_email} add_robot={add_robot}/>
        <UppdateRobot get_name={get_name} get_username={get_username} get_email={get_email} uppdate_robot={uppdate_robot}/>
        <SearchBox searchChange={onSearchChange}/>
        <DeleteRobot/>
        <Scroll>
          { isPending ? <h1>Loading</h1> :
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  }
}

// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App)
