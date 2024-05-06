import { useState, useEffect } from 'react';
import ContactList from '../ContactList/ContactList'
import './App.css'
import ContactForm from '../ContactForm/ContactForm';
import initialContacts from '../../contacts.json';
import SearchBox from '../SearchBox/SearchBox';

function App() {
  const [contacts, setContacts] = useState(() => {
    const newContact = window.localStorage.getItem("newContact");
    console.log(newContact)
   if (newContact !== null) {
    const parsedContacts = JSON.parse(newContact);
    if (Array.isArray(parsedContacts)) {
        return parsedContacts;
    } else {
        
        return [];
    }
}
    return initialContacts;
})
 const [filter, setFilter] = useState('')

 
  const AddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact])
    
  }

  const DeleteContact = (Id) => {
    setContacts((prevContacts)=>{
    return prevContacts.filter((contact)=>contact.id !==Id)
  })
  }
   useEffect(() => {
    window.localStorage.setItem("newContact", JSON.stringify(contacts));

   }, [contacts]);
  
  const VisibleContacts = contacts.filter((contact)=>contact.name.toLowerCase().includes(filter.toLowerCase()))
  return ( 
    <div>
  <h1>Phonebook</h1>

      <ContactForm onAdd={AddContact} />
      <SearchBox value={filter} onFilter={setFilter}/>
  <ContactList contacts={VisibleContacts} onDelete={DeleteContact} />
</div>
  )
  
}

export default App
