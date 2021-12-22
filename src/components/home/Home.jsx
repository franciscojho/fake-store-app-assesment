import React, { useEffect, useState } from 'react'
import ProductCard from '../ui/product-card/ProductCard'
import styles from './home.module.css'

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => setProducts(json))
    }, [])

    return (
        <div className={styles.store__home}>
            <h1>Home Page</h1>
            <div className={styles['store__home-products']}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Home
