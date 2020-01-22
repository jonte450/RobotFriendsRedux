import	React from 'react';

const AddRobot = ({name,nameChange,addToList}) => {
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
        placeholder='Add Name'
        value={name}
        onChange={nameChange}
        ref={nameInput}
      />

   <input
        className='pa2 ba b--green bg-lightest-blue'
        placeholder='Add Username'
        ///value={username}
        ///onChange={username}
        ref={userInput}
      />

    <input
       className='pa2 ba b--green bg-lightest-blue'
       name="email"
       placeholder='Add Email'
       ///value={email}
       ///onChange={handleEmail}
       ref={emailInput}

    />

      <button className="f50 link dim ph3 pv2 mb2 dib white bg-dark-green ma2" 
         href="addRobo"
         onClick={addToList}
         >
         Add Robot
        </button>

      <button className="f50 link dim ph3 pv2 mb2 dib white bg-dark-green ma1" 
         href="#0"
         onClick={clearInputs}
         >
         Reset Inputs
      </button>


    </div>
 );
}


export default AddRobot;