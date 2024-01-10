import { invoice } from "../data/invoice";

export const getInvoice = () => {
  /*
    let total = 0;
    invoice.items.forEach(items => {
        total = total + items.price * items.quantity;
     });
     */

  const total = invoice.items
    .map((item) => item.price * item.quantity)
    // eslint-disable-next-line no-undef
    .reduce((acumulator, currentValue) => acumulator + currentValue, 0);

  return { ...invoice, total };
};
