import styles from "./Form.module.css";
import React, { Component } from "react";


// Форма через функцію
// const Form = ({ handlerSubmit, handleChange }) => {
  
//   return (
//    <form className={styles.form} onSubmit={handlerSubmit}>
//       <label className={styles.form_item}>
//         <input
//         type="text"
//         name="name"        
//         onChange={handleChange}
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//         required 
//         autoComplete="off"/> Name
//       </label>
//       <label className={styles.form_item}>
//         <input
//         type="tel"
//         name="number"
//         onChange={handleChange}
//         autoComplete="off"
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//         required/> Number
//       </label>
//         <button type="submit">Add contact</button>  
//       </form> 
//   )
// }

// Форма через клас
class Form extends Component {
  state = {
  name: '',
  number: ''
  }
  
  handleChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    })
  };
  
  // checkUniqueName = data => {
  //   const normalizedName = data.name.toLowerCase();
  //   const duplicatedName = []
  //     this.props.contacts.find(contact => contact.name.toLocaleLowerCase() === normalizedName)
  //   const message = `${data.name} is already in contacts`

  //   if (duplicatedName.length > 0) {
  //     alert(message)
  //   } else {
  //     this.props.onSubmit(this.state);
  //   }
  // };

  handlerSubmit = event => {
    event.preventDefault();
    const data = this.state;
    const normalizedName = data.name.toLowerCase();
    const duplicatedName = this.props.contacts.find(contact => contact.name.toLowerCase() === normalizedName);
    const message = `${data.name} is already in contacts`;

    if (!!duplicatedName) {
      alert(message)   
    } else {
      this.props.onSubmit(this.state);
    }    

    this.reset();   
  };

  reset = () => {
    this.setState({ name: '', number: '' })
  };

  render() {
  return ( <form className={styles.form} onSubmit={this.handlerSubmit}>
      <label className={styles.form_item}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          autoComplete="off" /> Name
      </label>
      <label className={styles.form_item}>
        <input
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          autoComplete="off"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required /> Number
      </label>
      <button type="submit">Add contact</button>
    </form>
  )}
}

export default Form;