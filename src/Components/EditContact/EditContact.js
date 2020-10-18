import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createContact } from "../../Store/Actions/ContactAction";
import { useHistory } from "react-router-dom";
import shortid from "shortid";
const EditContact = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");

  const gettingAll = (e) => {
    e.preventDefault();
    const new_contact = {
      id: shortid.generate(),
      name: name,
      phone: phone,
      email: email,
    };
    dispatch(createContact(new_contact));
    history.push("/Contacts");
  };

  return (
    <div className="container">
      <div className="card shadow">
        <div className="card-heading">
          <h3>Create Contact</h3>
          <div className="card-body">
            <form onSubmit={(e) => gettingAll(e)}>
              <div className="form-group">
                <input
                  className="w-100 form-control"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="w-100 form-control"
                  type="number"
                  placeholder="Enter your Phone no"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="w-100 form-control"
                  type="email"
                  placeholder="Enter your Email adress"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <button className="btn btn-primary" type="submit">
                Sumbit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
