import { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalWindow, Overlay } from './Modal.styled';

export class Modal extends Component {
  // static propTypes = {
  //   onClose: PropTypes.func.isRequired,
  //   largeImageURL: PropTypes.string.isRequired,
  // };

  // componentDidMount() {
  //   window.addEventListener('keydown', this.onKeyDown);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.onKeyDown);
  // }

  // onKeyDown = e => {
  //   if (e.code === 'Escape') {
  //     this.props.onClose();
  //   }
  // };

  // onBackdropClick = e => {
  //   if (e.target === e.currentTarget) {
  //     this.props.onClose();
  //   }
  // };

  render() {
    return (
      <Overlay onClick={this.onBackdropClick}>
        <ModalWindow></ModalWindow>
      </Overlay>
    );
  }
}

export default Modal;
