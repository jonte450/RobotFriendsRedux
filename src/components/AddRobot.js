import	React from 'react';


const AddRobot = ({ get_name,name, get_username,username, get_email,email,add_robot }) => {
    const emailInput = React.useRef();
    const nameInput = React.useRef();
    const userInput = React.useRef();
    const clearInputs = () => {emailInput.current.value="";
                              nameInput.current.value="";
                              userInput.current.value="";};
  	return (
    <div>
         <h1>Add Robot By Name</h1>
         
         
      <input
        className='pa2 ba b--green bg-lightest-blue'
        name ="fullname"
        placeholder='Add Name'
        ref={nameInput}
        onChange={get_name}
      />

     <input
       className='pa2 ba b--green bg-lightest-blue'
       name="username"
       placeholder='Add Username'
       ref={userInput}
       onChange={get_username}
    />

    <input
       className='pa2 ba b--green bg-lightest-blue'
       name="email"
       placeholder='Add Email'
       ref={emailInput}
       onChange={get_email}
    />

      <a className="f50 link dim ph3 pv2 mb2 dib white bg-dark-green ma2" 
         href="#0"
         onClick={add_robot}>
         Add Robot
      </a>
      <a className="f50 link dim ph3 pv2 mb2 dib white bg-dark-green ma1" 
         href="#0"
         onClick={clearInputs}>
         Reset Inputs
      </a>


    </div>
 );
}
export default AddRobot;
