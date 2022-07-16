import { ImageGalleryItem } from './Item/ImageGalleryItem';
import { ImageGalleryList} from './ImageGallery.styled'

export const ImageGallery = ({ options }) => {
  return (
    <ImageGalleryList>
      {options.map(option => (
        <ImageGalleryItem key={option.id} item={option} />
      ))}
    </ImageGalleryList>
  );
};
