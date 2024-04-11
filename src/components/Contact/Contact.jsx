const Contact = ({ id, name, number, onDelete }) => (
  <div>
    <p>Name: {name}</p>
    <p>Number: {number}</p>
    <button onClick={() => onDelete(id)}>Delete</button>
  </div>
);

export default Contact;
