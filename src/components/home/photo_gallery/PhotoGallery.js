import React, { useState, useCallback, useEffect } from 'react';
import './PhotoGallery.css';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
// import { photos, photosSet } from './photos';
import SendIcon from '@material-ui/icons/Send';
import { Button } from '@material-ui/core';
import { photosResponse } from '../../utils/api';
import { photosSet } from './photos';
import { useHistory } from 'react-router-dom';

function PhotoGallery() {
  const [photos, setPhotos] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        const res = await photosResponse();
        if (res) {
          setPhotos(photosSet(res));
        }
      } catch (error) {
        console.log(error.response);
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
    <div className='photoGallery'>
      <div className='photoGalleryContainer__header'>
        <h1>Photo Gallery</h1>
        <div
          className='gallery__button'
          onClick={() => history.push('/gallery')}
        >
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

export default PhotoGallery;
