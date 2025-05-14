import React from 'react';
import { useEffect, useState } from 'react';
import { fetchImageSearchFromQuery } from './components/image-api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchBar from './components/SearchBar/SearchBar';
import Loading from './components/Loading/Loading';
import Error from './components/Error/Error';
import ImageModal from './components/ImageModal/ImageModal';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = image => {
    setSelectedImage(image);
  };

  const closeModal = image => {
    setSelectedImage(null);
  };

  const handleSearch = newQuery => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setError(false);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchImageSearch = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchImageSearchFromQuery(query, page);
        setImages(prev => [...prev, ...data]);
        console.log('🚀 ~ fetchImageSearch ~ setImages:', setImages);
      } catch (error) {
        setError(true);
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
      <SearchBar onSearch={handleSearch} />
      {loading && <Loading />}
      {error && <Error />}
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
        <ImageModal isOpen={true} image={selectedImage} isClose={closeModal} />
      )}
    </div>
  );
}

export default App;
