import { Component } from 'react';
import axios from 'axios';

import Button from './Button';
import SearchBar from './Searchbar';
import ImageGallery from './ImageGallery';
// import getImages from './services/Api';
import Modal from './Modal';
import ModalDetails from './ModalDetails';

import { Wrapper, Message } from './App.styled';

const PIXABAY_KEY = '31908525-c153f8ff1cbf36c0ec126789f';
const BASE_URL = 'https://pixabay.com/api/';

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    image_type: 'photo',
    orientation: 'horizontal',
    key: PIXABAY_KEY,
    perPage: 12,
  },
});

axios.defaults.baseURL = BASE_URL;

const getImages = async (q, page) => {
  const { data } = await instance.get(`/`, {
    params: {
      q,
      page,
    },
  });
  const { hits } = await data;
  return hits;
};

export default class App extends Component {
  state = {
    items: [],
    loading: false,
    error: null,
    search: '',
    page: 1,
    showModal: false,
    largeImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchImages();
    }
  }

  async fetchImages() {
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;
      const hits = await getImages(search, page);
      this.setState(({ items }) => ({ items: [...items, ...hits] }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  loadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  searchImages = ({ search }) => {
    if (search.length === 0) {
      return;
    }
    this.setState({ search, items: [], page: 1 });
  };

  // showLargeImg = ({ largeImageURL }) => {
  //   this.setState({ modalDetails: { largeImageURL }, showModal: true });
  // };

  getLargeImg = ({ largeImageURL }) => {
    this.setState({ showModal: true, largeImage: largeImageURL });
  };

  onCloseModal = () => {
    this.setState({ showModal: false, largeImage: '' });
  };

  render() {
    const { items, loading, error, showModal, largeImage } = this.state;
    const { loadMore, searchImages, getLargeImg, onCloseModal } = this;

    return (
      <Wrapper>
        <SearchBar onSubmit={searchImages} />
        {loading && <p>...Loading</p>}
        {error && (
          <Message>Something goes wrong. Please try again later.</Message>
        )}

        <ImageGallery items={items} getLargeImg={getLargeImg} />
        {Boolean(items.length) && (
          <Button text="Load more" onClick={loadMore}></Button>
        )}
        {showModal && (
          <Modal close={onCloseModal}>
            <ModalDetails largeImageURL={largeImage} />
          </Modal>
        )}
      </Wrapper>
    );
  }
}
