export const setPhotoSize = (photos) => {
  const photoSizes = [
    {
      width: 4,
      height: 3,
    },
    {
      width: 3,
      height: 2,
    },
    {
      width: 1,
      height: 1,
    },
  ];
  return photos.map((photo) => {
    const photoSize = photoSizes[Math.floor(Math.random() * photoSizes.length)];
    photo.src = photo.image;
    photo.width = photoSize.width;
    photo.height = photoSize.height;
    return photo;
  });
};
