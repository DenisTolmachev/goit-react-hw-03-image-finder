import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ options }) => {
  return (
    <ul>
      {options.map(option => (
        <ImageGalleryItem key={option.id} item={option} />
      ))}
    </ul>
  );
};
