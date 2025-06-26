import './CardInput.css';
import React, { useState, useEffect } from 'react';

const CardInput = ({ onAdd, editData }) => {
  const [form, setForm] = useState({ name: '', email: '' });

  useEffect(() => {
    if (editData) {
      setForm(editData); // ✅ pre-fill for edit
    }
  }, [editData]);

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    onAdd(form); // ✅ single add/edit handler
    setForm({ name: '', email: '' }); // reset after submit
  };

  return (
    <form onSubmit={handleSubmit} className="card-input">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleInput}
        placeholder="Name"
        className="input-field"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleInput}
        placeholder="Email"
        className="input-field"
      />
      <button className="submitBtn" type="submit">
        {editData ? 'Update' : 'Submit'}
      </button>
    </form>
  );
};

export default CardInput;
