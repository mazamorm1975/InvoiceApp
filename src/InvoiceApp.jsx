import { useState } from "react";
import { getInvoice } from "./services/getInvoice";
import { ClientView } from "./components/ClienteView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemView } from "./components/ListItemView";
import { TotalView } from "./components/TotalView";

export const InvoiceApp = () => {
  const {
    total,
    id,
    name,
    client,
    company,
    items: itemsInitial,
  } = getInvoice();

  const [productValue, setProduct] = useState("");
  const [priceValue, setPrice] = useState("");
  const [quantityValue, setQuantity] = useState("");
  const [items, setItems] = useState(itemsInitial);
  const [counter, setCounter] = useState(4);
  
  const onProductChange= ({target}) => {
    console.log(target.value);
    setProduct(target.value);
  }

  const onPriceChange = ({target}) => {
    console.log(target.value);
    setPrice(target.value);
  }

  const onQuantityChange = ({target}) => {
    console.log(target.value);
    setQuantity(target.value);
  }

  const onInvoiceItemsSubmit = (event) => {
    event.preventDefault();

    //Se validan espacios en blanco a la entrada de datos en el formulario
    if (productValue.trim().length <= 1) {
      alert("Error: Se requiere la descripción del producto");
      return;
    }

    if (!isNaN(productValue.trim())) {
      alert("Error: El campo NO es numerico.");
      return;
    }

    if (priceValue.trim().length <= 1) return;

    if (isNaN(priceValue.trim())) {
      alert("Error: No se recibio un valor númerico");
      return;
    }
    if (quantityValue.trim().length < 1) {
      alert("Error: Se requiere por lo menos un articulo");
      return;
    }
    if (isNaN(quantityValue.trim())) {
      alert("Error: No se recibio un número");
      return;
    }

    setItems([
      ...items,
      {
        id: counter,
        product: productValue.trim(),
        price: parseInt(priceValue.trim(), 10),
        quantity: parseInt(quantityValue.trim(), 10),
      },
    ]);
    setProduct(""), setPrice(""), setQuantity("");
    setCounter(counter + 1);
  }


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

            <form
              className="w-50"
              onSubmit={onInvoiceItemsSubmit}
            >
              <input
                type="text"
                name="product"
                value={productValue}
                placeholder="Producto"
                className="form-control m-3"
                onChange={(event) => onProductChange(event)}
              />

              <input
                type="text m-3"
                name="price"
                value={priceValue}
                placeholder="Precio"
                className="form-control m-3"
                onChange={(event) => onPriceChange(event)}
              />

              <input
                type="text"
                name="quantity"
                value={quantityValue}
                placeholder="Cantidad"
                className="form-control m-3"
                onChange={(event) => onQuantityChange(event)}
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
