import	React from 'react';

const Uppdate_Robot = ({ upName,upNameChange,upUserName,upUserNameChange,upEmail,upEmailChange,id,idChange,uppdate_robo}) => {


  	return (
    <div>
         <h1>Update Robot</h1>
      <input
        className='pa2 ba b--green bg-lightest-blue'
        placeholder='Add ID Robot To Change'
        value = {id}
        onChange={idChange}        
      />
         
      <input
        className='pa2 ba b--green bg-lightest-blue'
        placeholder='Change Name'
        value={upName}
        onChange={upNameChange}
      />

     <input
       className='pa2 ba b--green bg-lightest-blue'
       placeholder='Change Username'
       value={upUserName}
       onChange={upUserNameChange}
    />

    <input
       className='pa2 ba b--green bg-lightest-blue'
       placeholder='Change Email'
       value={upEmail}
       onChange={upEmailChange}
    />

      <button className="f50 link dim ph3 pv2 mb2 dib white bg-dark-green" 
         href="#0"
         onClick={uppdate_robo}>
         Update Robot
      </button>


    </div>
 );
}
export default Uppdate_Robot;