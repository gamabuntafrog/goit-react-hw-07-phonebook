import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import { fetchContacts, postContact } from "../../Redux/Operations";
import { addContact } from "../../Redux/Store";


const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleState = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const submitContact = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      return;
    } else if (
      contacts.some((el) => {
        return el.name === name;
      })
    ) {
      return;
    }
    if (number.trim() === "") {
      return;
    }
    dispatch(addContact({ id: shortid.generate(), name, number }));
    dispatch(postContact({ createdAt: Date.now(), id: shortid.generate(), name, number }))

  };

  return (
    <form className="form">
      <label>
        <p>Name</p>
        <input
          value={name}
          className="form__input"
          onChange={handleState}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <p>Tel</p>
        <input
          value={number}
          className="form__input"
          onChange={handleState}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className="form__button" onClick={submitContact}>
        Add contact
      </button>
    </form>
  );
};

export default Form;
