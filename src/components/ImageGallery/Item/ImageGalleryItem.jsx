import { Modal } from 'components/Modal/Modal';
import {
  ImageGalleryItemItem,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';
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
      <ImageGalleryItemItem>
        <ImageGalleryItemImage
          src={item.webformatURL}
          alt=""
          onClick={this.openModal}
        />
        {this.state.isOpen && (
          <Modal onClick={this.onBackdropClose} modalImg={item.largeImageURL} />
        )}
      </ImageGalleryItemItem>
    );
  }
  s;
}
