import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  onBackdropClose = () => {
    this.setState({ isOpen: false });
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    const { item } = this.props;
    return (
      <li>
        <img src={item.webformatURL} alt="" onClick={this.openModal} />
        {this.state.isOpen && (
          <Modal onClick={this.onBackdropClose} modalImg={item.largeImageURL} />
        )}
      </li>
    );
  }
  s;
}
