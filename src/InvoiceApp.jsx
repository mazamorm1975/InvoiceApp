/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { getInvoice, calculateTotal } from "./services/getInvoice";
import { ClientView } from "./components/ClienteView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemView } from "./components/ListItemView";
import { TotalView } from "./components/TotalView";
import { FormItemsView } from "./components/FormItemsView";

const invoiceInitial = {
  id: 0,
  name: "",
  client: {
    name: "",
    lastName: "",
    address: {
      country: "",
      city: " ",
      street: "",
      number: 0,
    },
  },
  company: {
    name: "",
    fiscalNumber: 0,
  },
  items: [],
};

export const InvoiceApp = () => {
  //Empieza declaración de los useState
  // eslint-disable-next-line no-unused-vars
  const [activeForm, setActiveForm] = useState(false);

  const [total, setTotal] = useState(0);

  const [counter, setCounter] = useState(4);

  const [invoice, setInvoice] = useState(invoiceInitial);

  const [items, setItems] = useState([]);

  const { id, name, client, company } = invoice;

  //Terminan declaraciones de useState

  useEffect(() => {
    const data = getInvoice();
    console.log(data);
    setInvoice(data);
    setItems(data.items);
  }, []);

  useEffect(() => {
    // console.log('Se cambia el contador')
  }, [counter]);

  useEffect(() => {
    //console.log('');
    setTotal(calculateTotal(items));
  }, [items]);

  // eslint-disable-next-line no-unused-vars
  const handlerAddItems = ({ product, price, quantity }) => {
    // eslint-disable-next-line no-undef
    setItems([
      // eslint-disable-next-line no-undef
      ...items,
      {
        // eslint-disable-next-line no-undef
        id: counter,
        product: product.trim(),
        price: parseInt(price.trim(), 10),
        quantity: parseInt(quantity.trim(), 10),
      },
    ]);

    setCounter(counter + 1);
  };

  const handlerDeleteItem = (id) => {
      setItems(items.filter(items => items.id !== id));
  };

  const onActiveForm = () => {
    setActiveForm(!activeForm);
  };

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
            <ListItemView title="Productos De la Factura" items={items} handlerDeleteItem={id => handlerDeleteItem(id)}/>
            <TotalView total={total} />
            <button className="btn  btn-secondary" onClick={onActiveForm}>
              {!activeForm ? "Agregar Articulo" : "OcultarFormulario"}
            </button>
            {!activeForm ? "" : <FormItemsView handler={handlerAddItems} />}
          </div>
        </div>
      </div>
    </>
  );
};
