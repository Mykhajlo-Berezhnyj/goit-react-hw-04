import React from 'react';
import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ items }) {
  return (
    <ul className={css.gallery}>
      {items.map(
        ({ id, alt_description, user, urls, likes, views, downloads }) => (
          <li key={id}>
            <ImageCard
              img={urls.regular}
              alt={alt_description}
              user={user.name}
              likes={likes}
              views={views}
              downloads={downloads}
            />
          </li>
        ),
      )}
    </ul>
  );
}
