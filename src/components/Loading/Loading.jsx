import { RingLoader } from 'react-spinners';
import css from './Loading.module.css';

export default function Loading() {
  return (
    <RingLoader
      className={css.loader}
      color="#007bff"
      size={80}
      loading={true}
    />
  );
}
