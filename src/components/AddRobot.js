import	React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {CHANGE_NAME,CHANGE_USERNAME,CHANGE_EMAIL,ADD_ROBOT} from '../constants';


const AddRobot = () => {
    const emailInput = React.useRef();
    const nameInput = React.useRef();
    const userInput = React.useRef();
    const disPatch = useDispatch();

    const handleName = e => disPatch({type:CHANGE_NAME,payload:e.target.value});
    const handleUser = e => disPatch({type:CHANGE_USERNAME,payload:e.target.value});
    const handleEmail = e => disPatch({type:CHANGE_EMAIL,payload:e.target.value});
    const sendAdd = () => disPatch({type:ADD_ROBOT});

    const clearInputs = () => {emailInput.current.value="";
                              nameInput.current.value="";
                              userInput.current.value="";};

    const name = useSelector(state => state.name)
    const username = useSelector(state => state.username)
    const email = useSelector(state => state.email)
    const handleAdd = e => {sendAdd();
                            e.preventDefault()
                           }

  	return (
    <div>
         <h1>Add Robot By Name</h1>
         
         
      <input
        className='pa2 ba b--green bg-lightest-blue'
        name ="fullname"
        placeholder='Add Name'
        value={name}
        onChange={handleName}
        ref={nameInput}
      />

     <input
       className='pa2 ba b--green bg-lightest-blue'
       name="username"
       placeholder='Add Username'
       value={username}
       onChange={handleUser}
       ref={userInput}
    />

    <input
       className='pa2 ba b--green bg-lightest-blue'
       name="email"
       placeholder='Add Email'
       value={email}
       onChange={handleEmail}
       ref={emailInput}

    />

      <a className="f50 link dim ph3 pv2 mb2 dib white bg-dark-green ma2" 
         href="addRobo"
         onClick={handleAdd}
         >
         Add Robot
        </a>

      <a className="f50 link dim ph3 pv2 mb2 dib white bg-dark-green ma1" 
         href="#0"
         onClick={clearInputs}
         >
         Reset Inputs
      </a>


    </div>
 );
}


export default AddRobot;