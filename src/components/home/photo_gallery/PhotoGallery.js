import React, { useState, useCallback } from 'react';
import './PhotoGallery.css';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { photos } from './photos';
import SendIcon from '@material-ui/icons/Send';
import { Button } from '@material-ui/core';

function PhotoGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className='photoGallery'>
      <div className='photoGalleryContainer__header'>
        <h1>Photo Gallery</h1>
        <div className='gallery__button'>
          <Button
            variant='outlined'
            endIcon={<SendIcon />}
            color='secondary'
            className='see__more'
          >
            See More
          </Button>
        </div>
      </div>
      <div className='photoGalleryContainer'>
        <Gallery photos={photos} onClick={openLightbox} />
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

export default PhotoGallery;
