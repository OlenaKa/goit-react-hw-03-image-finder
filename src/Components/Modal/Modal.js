import PropTypes from "prop-types";
import { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  state = {
    scrollHeight: 0,
  };
  componentDidMount() {
    this.setState({
      scrollHeight: window.scrollY,
    });
    document.body.style.position = "fixed";
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.body.setAttribute("style", "");
    document.removeEventListener("keydown", this.handleKeyDown);
    window.scrollTo({
      top: this.state.scrollHeight,
    });
  }

  onModalOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className="Overlay" onClick={this.onModalOverlayClick}>
        <img src={this.props.src} alt={this.props.alt} className="ModalImg" />
      </div>
    );
  }
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
