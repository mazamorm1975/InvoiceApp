/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { getInvoice, calculateTotal } from "./services/getInvoice";
import { ClientView } from "./components/ClienteView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemView } from "./components/ListItemView";
import { TotalView } from "./components/TotalView";

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
  const [counter, setCounter] = useState(4);

  const [invoice, setInvoice] = useState(invoiceInitial);

  const [items, setItems] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const [formItemsState, setFormItemsState] = useState({
    product: "",
    price: "",
    quantity: "",
  });

  const [total, setTotal] = useState(0);

  const { id, name, client, company } = invoice;

  const { product, price, quantity } = formItemsState;

  //Terminan declaraciones de useState

  useEffect(() => {
    const data = getInvoice();
    console.log(data);
    setInvoice(data);
    setItems(data.items);
  }, []);

  useEffect(() => {
    // console.log("Este es el nuevo precio");
  }, [price]);

  useEffect(() => {
    // console.log('Se cambia el formulario')
  }, [formItemsState]);

  useEffect(() => {
    // console.log('Se cambia el contador')
  }, [counter]);

  useEffect(() => {
    //console.log('');
    setTotal(calculateTotal(items));
  }, [items]);

  const onInputChange = ({ target: { name, value } }) => {
    // console.log(name);
    //console.log(value);
    setFormItemsState({
      ...formItemsState,
      [name]: value,
    });
  };

  const onInvoiceItemsSubmit = (event) => {
    event.preventDefault();

    //Se validan espacios en blanco a la entrada de datos en el formulario
    if (product.trim().length <= 1) {
      alert("Error: Se requiere la descripción del producto");
      return;
    }

    if (!isNaN(product.trim())) {
      alert("Error: El campo NO es numerico.");
      return;
    }

    if (price.trim().length <= 1) return;

    if (isNaN(price.trim())) {
      alert("Error: No se recibio un valor númerico");
      return;
    }
    if (quantity.trim().length < 1) {
      alert("Error: Se requiere por lo menos un articulo");
      return;
    }
    if (isNaN(quantity.trim())) {
      alert("Error: No se recibio un número");
      return;
    }

    setItems([
      ...items,
      {
        id: counter,
        product: product.trim(),
        price: parseInt(price.trim(), 10),
        quantity: parseInt(quantity.trim(), 10),
      },
    ]);

    setFormItemsState({
      product: "",
      price: "",
      quantity: "",
    });

    setCounter(counter + 1);
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
            <ListItemView title="Productos De la Factura" items={items} />
            <TotalView total={total} />

            <form className="w-50" onSubmit={onInvoiceItemsSubmit}>
              <input
                type="text"
                name="product"
                value={product}
                placeholder="Producto"
                className="form-control m-3"
                onChange={(event) => onInputChange(event)}
              />

              <input
                type="text m-3"
                name="price"
                value={price}
                placeholder="Precio"
                className="form-control m-3"
                onChange={(event) => onInputChange(event)}
              />

              <input
                type="text"
                name="quantity"
                value={quantity}
                placeholder="Cantidad"
                className="form-control m-3"
                onChange={(event) => onInputChange(event)}
              />
              <button type="submit" className="btn btn-primary w-100">
                Enviar Registro
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
