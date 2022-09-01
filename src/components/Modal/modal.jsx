import React from 'react';
import PropTypes from 'prop-types';
import { Container, StyledModal } from './modal.style';

const Modal = ({ children, onClose, open, maxHeight }) => {
  const handleOpen = () => {
    return (document.body.style.overflow = 'hidden');
  };

  const handleClose = () => {
    return (document.body.style.overflow = 'unset');
  };

  return (
    <StyledModal
      isOpen={open}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      onAfterOpen={handleOpen}
      onAfterClose={handleClose}
      closeTimeoutMS={350}
      ariaHideApp={false}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'rgba(29, 49, 65, 0.8)',
          overflowX: 'hidden',
          overflowY: 'auto',
          zIndex: 14,
        },
      }}
    >
      <Container open={open} maxHeight={maxHeight}>
        {children}
      </Container>
    </StyledModal>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  maxHeight: PropTypes.bool,
  position: PropTypes.oneOf(['center', 'bottom']),
};

Modal.defaultProps = {
  position: 'bottom',
  maxHeight: false,
  onClose: () => {},
};

export default Modal;
