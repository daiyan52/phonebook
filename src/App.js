import React from 'react';
import './App.css';
import { Routes,Route,Navigate} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import ContactList from './components/contacts/contactList/ContactList';
import AddContacts from './components/contacts/addContacts/AddContacts';
import ViewContacts from './components/contacts/viewContacts/ViewContacts';
import EditContact from './components/contacts/editContacts/EditContact';
let  App = () => {
  return (
     <React.Fragment>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
        <Route path={'/contacts/list'} element={<ContactList/>}/>
        <Route path={'/contacts/add'} element={<AddContacts/>}/>
        <Route path={'/contacts/view/:contactId'} element={<ViewContacts/>}/>
        <Route path={'/contacts/edit/:contactId'} element={<EditContact/>}/>
      </Routes>
     </React.Fragment>
  );
}

export default App;
