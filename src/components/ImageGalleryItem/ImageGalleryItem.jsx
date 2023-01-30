import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({
  webformatURL,
  getLargeImg,
  largeImageURL,
}) {
  return (
    <Item>
      <Image
        onClick={() => getLargeImg({ largeImageURL })}
        src={webformatURL}
        alt=""
      />
    </Item>
  );
}

ImageGalleryItem.propTypes = {
  // id: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
