import React from 'react';
import { useEffect, useState } from 'react';
import { fetchImageSearchFromQuery } from './components/image-api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { Toaster } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = image => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleSearch = newQuery => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setError(null);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchImageSearch = async () => {
      try {
        setError(null);
        setLoading(true);
        const data = await fetchImageSearchFromQuery(query, page);
        setImages(prev => [...prev, ...data]);
      } catch (err) {
         setError(err.message || 'Something went wrong.');
      } finally {
        setLoading(false);
      }
    };
    fetchImageSearch();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div>
      <Toaster
         position="top-center"
           reverseOrder={false} />
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={openModal} />
      )}
      {!loading && images.length === 0 && query && (
        <p>No images found for "{query}". Try a different search.</p>
      )}
      {images.length > 0 && images.length % 12 === 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal isOpen={true} image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
