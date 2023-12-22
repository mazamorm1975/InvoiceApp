export const invoice = {
    id: 10,
    name: 'Components PC',
    client: {
        name: 'Pepe',
        lastName: 'Doe',
        address: {
            country: 'USA',
            city: 'San Francisco',
            street: 'One Street',
            number: 12
        }
    },
    company: {
        name: 'New Egg',
        fiscalNumber: 1234567
    },
    items: [
        {
            product: 'CPU',
            price: 499,
            quantity: 1
        },
        {
            product: 'Corsair Keyboard Mecanico',
            price: 150,
            quantity: 1
        },
        {
            product: 'Monitor Asus',
            price: 350,
            quantity: 1
        }
    ]     
}