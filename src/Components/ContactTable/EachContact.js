import React from "react";
import Avatar from 'react-avatar'
import {Link} from 'react-router-dom'
function EachContact({contact}) {
  const  {name,phone,email ,id} = contact
  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td>
        <Avatar name={name} size="40" className="mr-2" round={true} />
        {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className='actions'>
        <Link to={`/Contacts/edit/${id}`}>
          <span className="material-icons">edit</span>
        </Link>
        <Link to='#'>
          <span className="material-icons ">remove-circle</span>
        </Link>
      </td>
    </tr>
  );
}

export default EachContact;
