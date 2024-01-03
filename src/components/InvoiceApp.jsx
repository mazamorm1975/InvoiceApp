import { getInvoice } from "../services/getInvoice";
import { ClientView } from "./ClienteView";
import { CompanyView } from "./CompanyView";
import { InvoiceView } from "./InvoiceView";
import { ListItemView } from "./ListItemView";

export const InvoiceApp = () => {
  const { id, name, client, company, items } = getInvoice();

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
                <ClientView titleClient="Datos Del Cliente" client={client} />
              </div>

              <div className="col">
                <CompanyView
                  titleCompany="Datos De La compañia"
                  company={company}
                />
              </div>
            </div>
             <ListItemView title="Productos De la Factura" items={items}/>
            </div>
        </div>
      </div>
    </>
  );
};
