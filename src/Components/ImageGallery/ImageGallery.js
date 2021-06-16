import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem";
import "./ImageGallery.css";
const ImageGallery = ({ items, handleImageClick }) => (
  <ul className="ImageGallery">
    {items.map((item) => (
      <ImageGalleryItem
        key={item.id}
        src={item.webformatURL}
        alt={item.tags}
        largeUrl={item.largeImageURL}
        clickHandle={handleImageClick}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
  handleImageClick: PropTypes.func.isRequired,
};
export default ImageGallery;
