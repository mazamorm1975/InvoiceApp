/* eslint-disable react/prop-types */
export const ProductItemView = ({product, price, quantity}) => {
    return(
        <>
              <tr>
              <td>{product}</td>
              <td>{price}</td>
              <td>{quantity}</td>
            </tr>
        </>
    )
}