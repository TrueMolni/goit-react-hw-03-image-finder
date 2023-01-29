import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ webformatURL, largeImageURL }) {
  return (
    <Item>
      <Image src={webformatURL} alt={largeImageURL} />
    </Item>
  );
}

ImageGalleryItem.propTypes = {
  // id: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
