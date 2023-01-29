import { Component } from 'react';

import Button from './Button';
import SearchBar from './Searchbar';
import ImageGallery from './ImageGallery';
import getImages from './services/Api';
import Modal from './Modal/Modal';

import { Wrapper, Message } from './App.styled';

export default class App extends Component {
  state = {
    items: [],
    loading: false,
    error: null,
    search: '',
    page: 1,
    showModal: false,
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

  // searchImages = ({ search }) => {
  //   this.setState({ search, items: [], page: 1 });
  // };

  // getLargeImg = largeImageURL => {
  //   this.setState({ showModal: true, largeImageURL: largeImageURL });
  // };

  // onCloseModal = () => {
  //   this.setState({ showModal: false });
  // };

  render() {
    const { items, loading, error, showModal } = this.state;
    const { loadMore, searchImages } = this;
    console.log(items);

    return (
      <Wrapper>
        <SearchBar onSubmit={searchImages} />
        {loading && <p>...Loading</p>}
        {error && (
          <Message>Something goes wrong. Please try again later.</Message>
        )}

        <ImageGallery items={items} />
        {Boolean(items.length) && (
          <Button text="Load more" onClick={loadMore}></Button>
        )}
        {showModal && <Modal></Modal>}
      </Wrapper>
    );
  }
}
