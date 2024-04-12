import s from "./Contact.module.css";
const Contact = ({ id, name, number, onDelete }) => (
  <div className={s.contactWrapper}>
    <div className={s.userinfo}>
      <p>{name}</p>
      <p>{number}</p>
    </div>
    <button className={s.contactBtn} onClick={() => onDelete(id)}>
      Delete
    </button>
  </div>
);

export default Contact;
