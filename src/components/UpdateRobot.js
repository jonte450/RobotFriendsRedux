import	React from 'react';

const Uppdate_Robot = ({ get_name,name, get_username,username, get_email,email,uppdate_robot }) => {


  	return (
    <div>
         <h1>Update Robot</h1>
      <input
        className='pa2 ba b--green bg-lightest-blue'
        placeholder='Add ID Robot To Change'
        onChange={get_name}
      />
         
      <input
        className='pa2 ba b--green bg-lightest-blue'
        placeholder='Change Name'
        value={name}
        onChange={get_name}
      />

     <input
       className='pa2 ba b--green bg-lightest-blue'
       placeholder='Change Username'
       value={username}
       onChange={get_username}
    />

    <input
       className='pa2 ba b--green bg-lightest-blue'
       placeholder='Change Email'
       value={email}
       onChange={get_email}
    />

      <a className="f50 link dim ph3 pv2 mb2 dib white bg-dark-green" 
         href="#0"
         onClick={uppdate_robot}>
         Add Robot
      </a>


    </div>
 );
}
export default Uppdate_Robot;