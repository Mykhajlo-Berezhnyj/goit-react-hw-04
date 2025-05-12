import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.query.value;
    if (query.trim() === '') {
      toast.error('Please enter search term!');
      return;
    }
    onSearch(query);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
    </header>
  );
}
