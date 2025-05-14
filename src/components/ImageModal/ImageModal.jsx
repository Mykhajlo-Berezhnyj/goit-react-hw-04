import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, image, onClose }) {
  if (!image) {
    return null;
  }
  const { urls, alt_description, user, likes, views, downloads } = image;

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
        <img src={urls?.regular} alt={alt_description} className={css.image} />
        <div className={css.info}>
          <p>
            <strong>Author:</strong> {user?.name}
          </p>
          <p>
            <strong>Likes:</strong> {likes}
          </p>
          <p>
            <strong>Views:</strong> {views}
          </p>
          <p>
            <strong>Downloads:</strong> {downloads}
          </p>
        </div>
        <button onClick={onClose} className={css.closeButton}>
          Close
        </button>
      </Modal>
    </>
  );
}
