import PropTypes from "prop-types";
import "./ImageGalleryItem.css";
const ImageGalleryItem = ({ src, alt, clickHandle, largeUrl }) => (
  <li className="ImageGalleryItem">
    <img
      src={src}
      alt={alt}
      className="ImageGalleryItem-image"
      onClick={() => clickHandle(alt, largeUrl)}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  clickHandle: PropTypes.func.isRequired,
  largeUrl: PropTypes.string.isRequired,
};
export default ImageGalleryItem;
