import React, { useEffect, useReducer } from 'react'
import Loader from '../ui/loader/Loader'
import ProductCard from '../ui/product-card/ProductCard'
import styles from './home.module.css'

const initialState = {
    isLoading: false,
    products: [],
}

const productsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                isLoading: false,
                products: action.payload,
            }

        case 'IS_LOADING':
            return {
                isLoading: true,
                products: [],
            }

        default:
            return state
    }
}

const Home = () => {
    const [{ isLoading, products }, dispatch] = useReducer(productsReducer, initialState)
    useEffect(() => {
        dispatch({ type: 'IS_LOADING' })
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => dispatch({ type: 'SET_PRODUCTS', payload: json }))
    }, [])

    return (
        <div className={styles.store__home}>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <h1>Products list</h1>
                    <div className={styles['store__home-products']}>
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Home
