import Contact from "../Contact/Contact";
const ContactList = ({ contacts, onDelete }) => (
  <div>
    <h2>Contact List</h2>
    {contacts.map((contact) => (
      <Contact key={contact.id} {...contact} onDelete={onDelete} />
    ))}
  </div>
);
export default ContactList;
