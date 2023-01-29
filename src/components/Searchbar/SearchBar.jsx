import axios from 'axios';
import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  SearchHeader,
  SearchBtn,
  SearchBtnLabel,
  SearchForm,
  SearchInput,
} from './SearchBar.styled';

export default class SearchBar extends Component {
  state = {
    search: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({ search: '' });
  }

  render() {
    const { search } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <SearchHeader>
        <SearchForm onSubmit={handleSubmit}>
          <SearchBtn type="submit">
            <SearchBtnLabel>Search</SearchBtnLabel>
          </SearchBtn>

          <SearchInput
            onChange={handleChange}
            type="text"
            name="search"
            value={search}
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            reguired
          />
        </SearchForm>
      </SearchHeader>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
