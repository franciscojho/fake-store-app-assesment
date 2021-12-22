import React from 'react'
import { productType, defaultProduct } from './propTypes'
import styles from './productCard.module.css'

const ProductCard = ({ product }) => {
    return (
        <div className={styles.store__productcard}>
            <img
                className={styles['store__productcard-img']}
                width={200}
                height={200}
                src={product.image}
                alt=""
            />
            <div className={styles['store__productcard-body']}>
                <p className={styles['store__productcard-title']}>{product.title}</p>
                {/* <p className={styles['store__productcard-desc']}>{product.description}</p> */}
            </div>
            <div className={styles['store__productcard-footer']}>
                <button className={styles['store__productcard-button']} type="button">
                    See Details
                </button>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    product: productType,
}

ProductCard.defaultProps = {
    product: defaultProduct,
}

export default ProductCard
