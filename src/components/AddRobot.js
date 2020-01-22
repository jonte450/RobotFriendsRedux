import	React from 'react';

const AddRobot = ({name,nameChange,username,userNameChange,email,emailChange,addToList}) => {

  	return (
    <div>
         <h1>Add Robot By Name</h1>
         
         
      <input
        className='pa2 ba b--green bg-lightest-blue'
        placeholder='Add Name'
        value={name}
        onChange={nameChange}
      />

     <input
        className='pa2 ba b--green bg-lightest-blue'
        placeholder='Add Username'
        value={username}
        onChange={userNameChange}
      />

     <input
        className='pa2 ba b--green bg-lightest-blue'
        placeholder='Add Email'
        value ={email}
        onChange={emailChange}
      />

      <button className="f50 link dim ph3 pv2 mb2 dib white bg-dark-green ma2" 
         href="addRobo"
         onClick={addToList}
         >
         Add Robot
        </button>

    </div>
 );
}

export default AddRobot;