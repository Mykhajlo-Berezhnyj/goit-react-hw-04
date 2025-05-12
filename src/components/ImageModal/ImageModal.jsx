import { useState } from 'react';
import Modal from 'react-modal';


Modal.setAppElement('#root');

export default function ImageModal( {isOpen, onClose, urls, alt_description, user, likes, views, downloads} ) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={openModal}>View image</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Image modal"
        className="modal"
        overlayClassName="overlay"
      >
              <h2>{alt_description}</h2>
              <img src={urls?.regular} alt={alt_description} className={css.modalImage} />
      <p>Author: {user?.name}</p>
      <p>Likes: {likes}, Views: {views}, Downloads: {downloads}</p>
        <button onClick={onClose}>Close</button>
      </Modal>
    </>
  );
}
