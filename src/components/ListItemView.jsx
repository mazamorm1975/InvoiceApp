/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { ProductItemView } from "./ProductItemV.iew";

// eslint-disable-next-line no-unused-vars
export const ListItemView = ({ title, items }) => {
  return (
    <>
      <h3>{title}</h3>
      <table className="table table-stripped table-hover">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, product, price, quantity }) => (
            <ProductItemView
              key={id}
              product={product}
              price={price}
              quantity={quantity}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

ListItemView.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
}