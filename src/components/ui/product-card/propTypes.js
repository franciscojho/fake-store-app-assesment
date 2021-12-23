import PropTypes from 'prop-types'

export const productType = {
    product: PropTypes.shape({
        category: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.shape({
            rate: PropTypes.number,
            count: PropTypes.number,
        }).isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
}

export const defaultProduct = {
    product: {
        category: "men's clothing",
        description:
            'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        id: 1,
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        price: 109.95,
        rating: {
            rate: 3.9,
            count: 120,
        },
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    },
}
