import { getInvoice } from "./services/getInvoice";
import { ClientView } from "./components/ClienteView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemView } from "./components/ListItemView";
import { TotalView } from "./components/TotalView";

export const InvoiceApp = () => {
  const { total, id, name, client, company, items } = getInvoice();

  return (
    <>
      <div className="container">
        <div className="card my-3">
          <div className="card-header">
            <h2>Modulo De Facturación</h2>
          </div>

          <div className="card-body">
            <InvoiceView id={id} name={name} />
            <div className="row my-3">
              <div className="col">
                <ClientView
                  titleClient="Datos Del Cliente"
                  client={client}
                  titleAddress="Dirección Del Cliente"
                />
              </div>

              <div className="col">
                <CompanyView
                  titleCompany="Datos De La compañia"
                  company={company}
                />
              </div>
            </div>
            <ListItemView title="Productos De la Factura" items={items} />
            <TotalView total={total} />
            <form>
              <input
                type="text"
                name="product"
                placeholder="Producto"
                className="form-control m-3"
                onChange={(event) => {
                  console.log(event.target.value);
                }}
              />

              <input
                type="text m-3"
                name="price"
                placeholder="Precio"
                className="form-control m-3"
                onChange={(event) => {
                  console.log(event.target.value);
                }}
              />

              <input
                type="text"
                name="quantity"
                placeholder="Cantidad"
                className="form-control m-3"
                onChange={(event) => {
                  console.log(event.target.value);
                }}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
