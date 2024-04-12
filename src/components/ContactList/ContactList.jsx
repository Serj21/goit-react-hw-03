import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
const ContactList = ({ contacts, onDelete }) => (
  <div className={s.contactList}>
    {contacts.map((contact) => (
      <Contact key={contact.id} {...contact} onDelete={onDelete} />
    ))}
  </div>
);
export default ContactList;
