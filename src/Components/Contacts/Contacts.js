import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../Redux/Store";
import { fetchContacts, wipeOffContact } from "../../Redux/Operations";
import { useEffect } from "react";



const Contacts = () => {
  const dispatch = useDispatch();

  const contactsList = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);

  useEffect(() => {
    dispatch(fetchContacts())
  }, []);

  const filteredContacts = contactsList.filter((el) => {
    return el.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ul className="contacts">
      {filteredContacts.map((item) => {
        return (
          <li className="contacts__item" key={item.id}>
            <div>
              <h1 className="contacts__name">Name: {item.name}</h1>
              <h2 className="contacts__numbaer">Number: {item.number}</h2>
            </div>
            <button
              onClick={() => {
                dispatch(deleteContact(item));
                dispatch(wipeOffContact(item))
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Contacts;
