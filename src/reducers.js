import {
  CHANGE_SEARCHFIELD,
  CHANGE_NAME,
  CHANGE_USERNAME,
  CHANGE_EMAIL,
  ADD_ROBOT,
  UPDATE_ROBOT,
  DELETE_ROBOT,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants';

const data = {
  robots: [{id:1,
            name:'John Doe',
            username:'JD',
            email:'john_doe@gmail.com',
  }],
  id: '',
  name: '',
  username: '', 
  email: '',
  isPending: true,
  searchField: ''
}

function clear_field(user){
  user.name = '';
  user.username = '';
  user.email = '';
}

function addNewRobot(obj,list){
var new_robot = {};
new_robot.id = obj.robots.length + 1;
new_robot.name = obj.name;
new_robot.username = obj.username;
new_robot.email = obj.email;
list.push(new_robot);
return list;
} 

export const manage_data = (state=data,action={})=>{
  switch(action.type){
    case ADD_ROBOT:
    var new_list = addNewRobot(state,state.robots);
    state.robots = new_list;
    clear_field(state);
    return Object.assign({},state,{robots:new_list});
    case UPDATE_ROBOT:
    console.log("Hello Update!");
      return state;
    case DELETE_ROBOT:
      return state;
    case CHANGE_NAME: 
      return Object.assign({}, state,{name: action.payload})
    case CHANGE_USERNAME: 
      return Object.assign({}, state,{username: action.payload})
    case CHANGE_EMAIL: 
      return Object.assign({}, state,{email: action.payload})
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {robots: action.payload, isPending: false})
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, {error: action.payload})
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, {searchField: action.payload})  
      default:
      return state;
  }
}
