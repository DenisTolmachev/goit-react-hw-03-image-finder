import { Component } from 'react';
import {ModalBackdrop, ModalContainer} from './Modal.styled'

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.onClick();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClick();
    }
  };

  render() {
    const { onClick, modalImg } = this.props;
    return (
      <ModalBackdrop onClick={onClick}>
        <ModalContainer>
          <img src={modalImg} alt="" />
        </ModalContainer>
      </ModalBackdrop>
    );
  }
}
