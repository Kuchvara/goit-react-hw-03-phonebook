import React, {Component} from "react";
import Form from "./Components/Form/Form";
import ContactsList from "./Components/ContactsList/ContactsList";
import Filter from "./Components/Filter/Filter";
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},    
  ],
  filter: ''  
  }

  checkUniqueName = data => {
    const normalizedName = data.name.toLowerCase();
    const duplicatedName = this.state.contacts.find(contact => contact.name.toLocaleLowerCase() === normalizedName)
    const message = `${data.name} is already in contacts`

    if (duplicatedName.lendth > 0) {
      return alert(message);     
    }  
  }

  handlerSubmit = data => {
    const contact = {
      id: uuidv4(),
      name: data.name,
      number: data.number
    }     

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }))
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  handleFilter = (event) => {
    const { filter, contacts } = this.state;   
    const normalizedFilter = filter.toLowerCase();    

    return (
      contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    );
  }

  handleDelete = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.handleFilter()

    return (
    <>
      <h1>Phonebook</h1>
      {/* <Form handlerSubmit={this.handlerSubmit} handleChange={this.handleChange}/> форма через функцію */}
        <Form onSubmit={this.handlerSubmit} contacts={this.state.contacts}/>
      <h2>Contacts</h2>
      <Filter handleChange={this.changeFilter} filter={this.state.filter}/>      
      <ContactsList contacts={filteredContacts} handleDelete={this.handleDelete}/>
    </>  
  );
}}

export default App;