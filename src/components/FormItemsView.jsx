import { useEffect, useState } from "react";


// eslint-disable-next-line react/prop-types
export const FormItemsView = ({handler}) => {
  // eslint-disable-next-line no-undef
  const [formItemsState, setFormItemsState] = useState({
    product: "",
    price: "",
    quantity: "",
  });

  const { product, price, quantity } = formItemsState;

  
  useEffect(() => {
    // console.log("Este es el nuevo precio");
  }, [price]);

  // eslint-disable-next-line no-undef
  useEffect(() => {
    // console.log('Se cambia el formulario')
  }, [formItemsState]);

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

    handler(formItemsState);

    setFormItemsState({
      product: "",
      price: "",
      quantity: "",
    });

    
  };

  return (
    <>
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
    </>
  );
};
