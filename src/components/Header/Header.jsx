import React from 'react';
import './Header.css'; // Make sure to import your CSS

function Header() {
  return (
    <header className="header">
      <img
        src="/assets/react.svg"
        alt="Firebase Logo"
        className="header-logo"
      />
      <p className="header-title">Firebase Contact App</p>
    </header>
  );
}

export default Header;
