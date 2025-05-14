import React from 'react';
import Modal from 'react-modal';
import css from './ImageModal.module.css';



export default function ImageModal({ isOpen, image, onClose }) {
  if (!image) {
    return null;
  }
  const { urls, alt_description, user, created_at, likes } = image;

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Image modal"
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <h2 className={css.title}>{alt_description}</h2>
        <button onClick={onClose} className={css.closeButton}>
           X
        </button>
        <img src={urls?.regular} alt={alt_description} className={css.image} />
        <div className={css.info}>
          <p>
            <strong>Author:</strong> {user?.name}
          </p>
          <p>
            <strong>Created:</strong> {created_at}
          </p>
          <p>
            <strong>Likes:</strong> {likes}
          </p>
        </div>
      </Modal>
    </>
  );
}
