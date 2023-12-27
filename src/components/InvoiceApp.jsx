import { getInvoice } from "../services/getInvoice";

export const InvoiceApp = () => {
  const { id, name, client, company, items } = getInvoice();
  const { name: nameClient, lastName, address } = client;
  const { country, city, street, number } = address;

  return (
    <>
      <div className="container">
        <div className="card my-3">
          <div className="card-header">Modulo De Facturación</div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">{id}</li>
              <li className="list-group-item">{name}</li>
            </ul>

            <div className="row my-3">
              <div className="col">
                <h3>Datos Del Cliente</h3>
                <ul className="list-group">
                  <li className="list-group-item active">{nameClient}</li>
                  <li className="list-group-item">{lastName}</li>
                </ul>
                <h3>Dirección Del Cliente</h3>
                <ul className="list-group">
                  <li className="list-group-item">
                    Pais: {country} Ciudad: {city}
                  </li>
                  <li className="list-group-item">
                    Calle: {street} Numero Exterior: {number}{" "}
                  </li>
                </ul>
              </div>

              <div className="col">
                <h3>Datos De La Compañia</h3>
                <ul className="list-group">
                  <li className="list-group-item active">{company.name}</li>
                  <li className="list-group-item">{company.fiscalNumber}</li>
                </ul>
              </div>
            </div>

            <h3>Productos De la Factura</h3>
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
                  <tr key={id}>
                    <td>{product}</td>
                    <td>{price}</td>
                    <td>{quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
