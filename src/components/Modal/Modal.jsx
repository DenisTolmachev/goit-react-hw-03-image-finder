import { Component } from 'react';
import { ModalBackdrop, ModalImg } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = e => {
    if (e.key === 'Escape' || e.target === e.currentTarget) {
      this.props.onClick();
    }
  };

  render() {
    const { modalImg } = this.props;
    return (
      <ModalBackdrop onClick={this.closeModal}>
        <div>
          <ModalImg src={modalImg} alt="" />
        </div>
      </ModalBackdrop>
    );
  }
}
