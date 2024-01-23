/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

export const ProductItemView = ({id, product, price, quantity, handlerDeleteItem }) => {
  return (
    <>
      <tr>
        <td>{product}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td><button 
          className="btn btn-danger" 
          onClick={() => handlerDeleteItem(id)}>Eliminar</button></td>
      </tr>
    </>
  );
};

ProductItemView.propTypes = {
  product: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
