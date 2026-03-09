import { useState, useEffect } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useUsersStore } from '@/store/useUsersStore';
import { DEBOUNCE_MS } from '@/constants';
import s from './search.module.css';

export const Search = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const search = useUsersStore((state) => state.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      search(searchValue);
    }, DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [searchValue, search]);

  const handleClear = () => setSearchValue("");

  return (
    <form className={s.searchBox}>
      <label htmlFor="searchInput" className={s.label}>
        <span className="sr-only">Поиск</span>
        <input
          className={s.input}
          id="searchInput"
          type="text"
          placeholder="Поиск..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {searchValue ? (
          <button
            type="button"
            className={s.iconBtn}
            aria-label="Очистить"
            onClick={handleClear}
          >
            <XMarkIcon className={s.icon} />
          </button>
        ) : (
          <MagnifyingGlassIcon className={s.icon} aria-hidden />
        )}
      </label>
    </form>
  );
}
