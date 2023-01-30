import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

export default function ImageGallery({ items, getLargeImg }) {
  const elements = items.map(({ id, webformatURL, largeImageURL }) => {
    return (
      <ImageGalleryItem
        getLargeImg={getLargeImg}
        key={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
      />
    );
  });
  return <GalleryList>{elements}</GalleryList>;
}

ImageGallery.defaultProps = {
  items: [],
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
