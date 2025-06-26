import './ContactCard.css';

function ContactCard({ formData, onDelete, onEdit }) {
  return (
    <>
      {formData.map((item, index) => (
        <section className="contact-card" key={index}>
          <img src="/assets/contact.svg" alt="contact" className="contact-avatar" />

          <div className="contact-details">
            <h1 className="contact-name">{item.name}</h1>
            <p className="contact-email">{item.email}</p>
          </div>

          <div className="contact-actions">
            <img
              src="/assets/edit.svg"
              alt="edit"
              className="icon"
              onClick={() => onEdit(index)}
            />
            <img
              src="/assets/bin.svg"
              alt="delete"
              className="icon"
              onClick={() => onDelete(index)}
            />
          </div>
        </section>
      ))}
    </>
  );
}

export default ContactCard;
