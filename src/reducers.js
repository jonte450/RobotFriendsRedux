import {
  CHANGE_SEARCHFIELD,
  CHANGE_NAME,
  CHANGE_USERNAME,
  CHANGE_EMAIL,
  ADD_ROBOT,
  CHANGE_ID,
  UPDATE_ROBOT,
  DELETE_ROBOT,
  UPNAME,
  UPUSERNAME,
  UPEMAIL,
  DELID,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants';

const data = {
  robots: [{id:1,
            name:'Leanne Graham',
            username:'LeaG',
            email:'Sincere@april.biz',
            },
            {
            id:2,
            name:'Erwin Howell',
            username:'Erh',
            email:'Shanna@melissa.tv',
            },
            {
            id:3,
            name:'Clementine Bauch',
            username:'Clb',
            email:'Nathan@yesenia.net',
            },
            {
            id:4,
            name:'Patricia Lebsack',
            username:'Pal',
            email:'Julianne.OConner@kory.org',
            },
            {
            id:5,
            name:'Chelsey Dietrich',
            username:'Chd',
            email:'Lucio_Hettinger@annie.ca',
            },
            {
            id:6,
            name:'Mrs. Dennis Schulist',
            username:'Dsc',
            email:'Karley_Dach@jasper.info',
            },
            {
            id:7,
            name:'Nicolas Runolfsdottir V',
            username:'Nir',
            email:'Sherwood@rosamond.me',
            },
            {
            id:8,
            name:'Glenna Reichert',
            username:'Gle',
            email:'Chaim_McDermott@dana.io',
            },
            {
            id:9,
            name:'Clementina DuBuque',
            username:'Cdu',
            email:'Rey.Padberg@karina.biz',
            }
  ],
  id: '',
  name: '',
  username: '', 
  email: '',
  isPending: true,
  searchField: '',
  upName:'',
  upUserName:'',
  upEmail:'',
  delid:''
}

function removeRobot(list,id){
  var new_arr = list.filter(function(obj){ return obj.id !== parseInt(id);});
  return new_arr;
}

function setUpdates(obj,upName,upUserName,upEmail){
  if(upName !== ''){
    obj.name = upName; 
  }
  if(upUserName !== ''){
    obj.username = upUserName; 
  }
  if(upEmail !== ''){
    obj.email = upEmail; 
  }
}

function findRobot(list,id,upName,upUserName,upEmail){
  var check = list.find(r => r.id === parseInt(id));
  var new_arr = list.filter(function(obj){ return obj.id !== parseInt(id);});
  if(check === undefined){
    alert("This index dosen't exist!");
    return list;
  }
  else{setUpdates(check,upName,upUserName,upEmail);
  new_arr.push(check);
  new_arr.sort((a,b) => parseInt(a.id)-parseInt(b.id));
  return new_arr;
}
}

function clear_field(user){
  user.name = '';
  user.username = '';
  user.email = '';
}

function clear_delid(user){
  user.delid = '';
}

function clear_field_updates(user){
  user.upName = '';
  user.upUserName = '';
  user.upEmail = '';
  user.id = '';
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
  var new_list = [];
  switch(action.type){
    case ADD_ROBOT:
     new_list = addNewRobot(state,state.robots);
    state.robots = new_list;
    clear_field(state);
      return Object.assign({},state,{robots:new_list});
    case UPDATE_ROBOT:
    var updated_list = findRobot(state.robots,state.id,state.upName,state.upUserName,state.upEmail);
    clear_field_updates(state);
      return Object.assign({},state,{robots:updated_list});
    case DELETE_ROBOT:
      new_list = removeRobot(state.robots, state.delid);
     clear_delid(state);
      return Object.assign({},state,{robots:new_list});
    case DELID:
      return Object.assign({}, state,{delid: action.payload})
    case CHANGE_ID: 
      return Object.assign({}, state,{id: action.payload})
    case CHANGE_NAME: 
      return Object.assign({}, state,{name: action.payload})
    case CHANGE_USERNAME: 
      return Object.assign({}, state,{username: action.payload})
    case CHANGE_EMAIL: 
      return Object.assign({}, state,{email: action.payload})
    case UPNAME: 
      return Object.assign({}, state,{upName: action.payload})
    case UPUSERNAME: 
      return Object.assign({}, state,{upUserName: action.payload})
    case UPEMAIL: 
      return Object.assign({}, state,{upEmail: action.payload})
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
