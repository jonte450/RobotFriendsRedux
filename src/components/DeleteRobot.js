import React from 'react';



const DeleteBox = ({delid,Changedelid,delRobo}) => {
  return (
    <div className='pa2'>
    <h1>Delete Robot By ID </h1>
      <input
      name="id"
      value={delid}
      className='pa2 ba b--green bg-lightest-blue'
      placeholder='Write ID of Robot'
      onChange={Changedelid}
      />
      <button className="f50 link dim ph3 pv2 mb2 dib white bg-dark-green" 
         onClick={delRobo}>
         Delete Robot
      </button>    </div>
  );
 }
export default DeleteBox;