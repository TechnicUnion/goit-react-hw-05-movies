import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
// import css from '../styles.module.css';

export default function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = eve => {
    setSearchQuery(eve.currentTarget.value.toLowerCase());
  };

  const handleSubmit = eve => {
    eve.preventDefault();

    if (searchQuery.trim() === '') {
      return;
    }

    onSubmit(searchQuery);
    eve.target.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <BsSearch />
        </button>

        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
