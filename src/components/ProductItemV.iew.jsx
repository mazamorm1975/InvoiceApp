/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

export const ProductItemView = ({ product, price, quantity }) => {
  return (
    <>
      <tr>
        <td>{product}</td>
        <td>{price}</td>
        <td>{quantity}</td>
      </tr>
    </>
  );
};

ProductItemView.propTypes = {
  product: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
