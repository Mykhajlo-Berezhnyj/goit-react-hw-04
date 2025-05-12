import React from 'react';
import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ items }) {
    return (
        <ul className={css.gallery}>{items.map(({ id, image }) => (
            <li key={id}>
                <ImageCard
                    img = {image}
                />
            </li>
        ))}
        </ul>
    )
};
