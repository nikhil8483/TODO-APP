import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header'
import SearchContact from './components/SearchContact/SearchContact';
import ContactCard from './components/ContactCard/ContactCard';
import CardInput from './components/CardInput/CardInput';
import Pagination from './components/Pagination/Pagination';

function App() {
  const [showInput, setShowInput] = useState(false);
  const [formData, setFormData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 3;

  const handleToggle = () => {
    setShowInput(prev => !prev);
  };

  const handleAddContact = (contact) => {
    if (editingIndex !== null) {
      const updated = [...formData];
      updated[editingIndex] = contact;
      setFormData(updated);
      setEditingIndex(null);
    } else {
      setFormData(prev => [...prev, contact]);
    }
    setShowInput(false);
  };

  const handleDelete = (indexToDelete) => {
    setFormData(prev => prev.filter((_, index) => index !== indexToDelete));
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setShowInput(true);
  };

  const filteredContacts = formData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLast = currentPage * contactsPerPage;
  const indexOfFirst = indexOfLast - contactsPerPage;
  const currentContacts = filteredContacts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredContacts.length / contactsPerPage);

  return (
    <div className="container">
      <Header />
      <SearchContact setToggle={handleToggle} setSearchQuery={setSearchQuery} />
      {showInput && (
        <CardInput
          onAdd={handleAddContact}
          editData={editingIndex !== null ? formData[editingIndex] : null}
        />
      )}
      <ContactCard
        formData={currentContacts}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      {filteredContacts.length > 0 && (
        <Pagination totalPages={totalPages} onPageChange={setCurrentPage} />
      )}
    </div>
  );
}

export default App;
