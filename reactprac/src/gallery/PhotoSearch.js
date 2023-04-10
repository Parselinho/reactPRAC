import React, { useState, useEffect } from 'react';
import { searchPhotos } from './UnsplashAPI';
import { Row, Col, Card, Modal } from 'react-bootstrap';
import ErrorMessage from './ErrorMessage';

const PhotoSearch = ({ searchQuery }) => {
  const [photoList, setPhotoList] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [errorType, setErrorType] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const data = await searchPhotos(searchQuery, 1);
        if (data) {
          if (data.results.length > 0) {
            setPhotoList(data.results);
            setErrorType(null);
          } else {
            setErrorType('noResults');
          }
        }
      } catch (error) {
        console.error('Error searching photos:', error);
        setErrorType('serverError');
      }
    };

    fetchPhotos();
  }, [searchQuery]);

  const handleBackToHome = () => {
    setPhotoList([]);
    setErrorType(null);
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleModalClose = () => {
    setSelectedPhoto(null);
  };

  return (
    <div>
      <h2>Search Results for "{searchQuery}"</h2>
      {errorType ? (
        <ErrorMessage errorType={errorType} onBackToHome={handleBackToHome} />
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
            {photoList.map((photo) => (
                <Col key={photo.id}>
                    <Card onClick={() => handlePhotoClick(photo)} style={{ cursor: 'pointer', height: '100%' }}>
                        <Card.Img variant="top" src={photo.urls.regular} style={{ height: '200px', objectFit: 'cover' }} />
                     <Card.Body>
                            <Card.Title>Photo by {photo.user.name}</Card.Title>
                        <Card.Text style={{ height: '3.6rem', overflow: 'hidden' }}>{photo.alt_description || ''}</Card.Text>
                     </Card.Body>
                    </Card>
                 </Col>
             ))}
        </Row>

      )}

      {selectedPhoto && (
        <Modal show={true} onHide={handleModalClose} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>{selectedPhoto.user.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedPhoto.urls.full} alt={selectedPhoto.user.name} style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }} />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default PhotoSearch;
