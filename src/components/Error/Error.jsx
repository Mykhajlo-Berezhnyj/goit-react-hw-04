import React from 'react';
import css from './Error.module.css';

export default function Error() {
  return (
    <div className={css.error}>
      <p>Whoops, something went wrong! Please try reloading this page!</p>
    </div>
  );
}
