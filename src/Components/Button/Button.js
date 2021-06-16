import PropTypes from "prop-types";
import "./Button.css";
const Button = ({ handleClick }) => (
  <button type="button" className="Button" onClick={handleClick}>
    Load more
  </button>
);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default Button;
