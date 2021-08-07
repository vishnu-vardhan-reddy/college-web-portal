import React, { useState, useCallback, useEffect } from 'react';
import { photosResponse } from '../utils/api';
import './Gallery.css';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { setPhotoSize } from './../utils/setPhotoSize';

function GalleryComponent() {
  const [photos, setPhotos] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const result = await photosResponse();
        if (result) {
          setPhotos(setPhotoSize(result));
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className='gallery'>
      <h1>Gallery</h1>
      <div className='galleryContainer'>
        <Gallery photos={photos ? photos : []} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </div>
  );
}

export default GalleryComponent;
