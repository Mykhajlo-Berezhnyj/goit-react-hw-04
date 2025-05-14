import React from 'react';
import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ items, onImageClick }) {
  return (
    <ul className={css.gallery}>
      {items.map((item) => 
       (
          <li key={item.id} onClick={() => onImageClick(item)}>
            <ImageCard
              img={item.urls.small}
              alt={item.alt_description}
              user={item.user.name}
              created = {item.created_at}
              likes={item.likes}
            />
          </li>
        ),
      )}
    </ul>
  );
}
