import React,{useEffect} from "react";
import {useSelector } from 'react-redux'
import EachContact from "./EachContact";

const Contact=()=> {
  const contacts = useSelector(state => state.contacts)
  return (
    <div class="container">
      <table class="table shadow table-responsive-lg table-responsive-md table-responsive-sm table-responsive-xs">
        <thead>
          <tr className="bg-danger text-white ">
            <th>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <label className="custom-control-label"></label>
              </div>
            </th>

            <th>Name</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <EachContact contact={contact} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contact;
