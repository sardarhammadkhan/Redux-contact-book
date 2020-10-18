import React ,{useEffect}from 'react';
import Contact from './Components/ContactTable/Contact';
import Navbar from './Components/Navbar';
import Store from './Store/Store'
import {Provider} from 'react-redux'
import './Styles/App.scss';
import EditContact from './Components/EditContact/EditContact'
import CreateCOntact from './Components/CreateContact/CreateCOntact';
import { Route ,Switch ,BrowserRouter as Router} from 'react-router-dom';


function App() {

  return (
    <Provider store={Store}>
      <Router>
        <div className="App ">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Navbar} />
            <Route exact path="/Contacts/edit/:id" component={EditContact} />
            <Route path="/Contacts" component={Contact} />
            <Route path="/Add" component={CreateCOntact} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
