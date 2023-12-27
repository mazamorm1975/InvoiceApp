import { getInvoice } from "../services/getInvoice";

export const InvoiceApp = () => {
  const { id, name, client, company, items } = getInvoice();
  const { name: nameClient, lastName, address } = client;
  const { country, city, street, number } = address;

  return (
    <>
      <h1>Modulo De Facturas</h1>
      <ul>
        <li> Id_Factura: {id}</li>
        <li> nombre_cliente: {name}</li>
      </ul>

      <h3>Datos Del cliente</h3>
      <ul>
        <li>
          {nameClient} {lastName}
        </li>
        <li>
          {country}
          {city}
        </li>
        <li>{street}</li>
        <li>{number}</li>
      </ul>

      <h3>Datos Fiscales De La Compañia</h3>
      <ul>
        <li>{company.name}</li>
        <li>{company.fiscalNumber}</li>
      </ul>
      <h4>Productos De La Factura</h4>
      <table>
        <thead>
          <tr>
            <th>Products</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, product, price, quantity }) => (
            // eslint-disable-next-line react/jsx-key
            <tr key={id}>
              <td>{product}</td>
              <td>{price}</td>
              <td>{quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
