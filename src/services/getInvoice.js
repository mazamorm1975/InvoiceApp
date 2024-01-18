import { invoice } from "../data/invoice";

export const getInvoice = () => {
  /*
    let total = 0;
    invoice.items.forEach(items => {
        total = total + items.price * items.quantity;
     });
     */

  const total = calculateTotal(invoice.items); 

  return { ...invoice, total };
};

export const calculateTotal = (items=[]) => {
  return items
    .map((item) => item.price * item.quantity)
    // eslint-disable-next-line no-undef
    .reduce((acumulator, currentValue) => acumulator + currentValue, 0);
}