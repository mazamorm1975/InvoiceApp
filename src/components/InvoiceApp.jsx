import { getInvoice } from "../services/getInvoice";

export const InvoiceApp = () => {
  
    const invoice = getInvoice();
    
    return (
    <>
        <h1>Modulo De Facturas</h1>
        <ul>
            <li> Id_Factura: {invoice.id}</li>
            <li> nombre_cliente: {invoice.name}</li>
            <li> Articulos_Factura: {invoice.company.name}</li>
        </ul>
    </> 
    )
};
