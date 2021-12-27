import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { useLocation } from 'react-router-dom'
import styles from './productDetail.module.css'

const ProductDetail = () => {
    const location = useLocation()
    const { product } = location.state

    return (
        <div className={styles['store__prod-detail']}>
            <img className={styles['store__prod-detail-img']} src={product.image} alt="" />
            <div className={styles['store__prod-detail-content']}>
                <h1 className={styles['store__prod-detail-title']}>{product.title}</h1>
                <ReactStars edit={false} count={5} value={product.rating?.rate} />
                <p>Price: ${product.price}</p>
                <h4>About this item</h4>
                <p>{product.description}</p>
                <ul>
                    <li>Cateogry: {product.category}</li>
                </ul>
            </div>
        </div>
    )
}

export default ProductDetail
