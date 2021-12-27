import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './productCard.module.css'

const getRandomNum = () => (Math.floor(Math.random() * 10) + 1) * 10

const ProductCard = ({ product }) => {
    const [counter, setCounter] = useState(getRandomNum())
    const [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
        if (counter > 0) setTimeout(() => setCounter(counter - 1), 1000)
        else setIsOpen(false)
    }, [counter])

    return (
        <div className={styles.store__productcard}>
            <p className={styles['store__productcard-counter']}>
                {isOpen ? (
                    <>
                        Deal expires in: <br />
                        {counter}s
                    </>
                ) : (
                    <>Expired</>
                )}
            </p>
            <p
                className={`${styles['store__productcard-price']} ${
                    !isOpen ? styles['store__productcard-price--expired'] : ''
                }`}
            >
                ${product.price}
            </p>
            <img className={styles['store__productcard-img']} src={product.image} alt="" />
            <div className={styles['store__productcard-body']}>
                <p className={styles['store__productcard-title']}>{product.title}</p>
                <p className={styles['store__productcard-desc']}>{product.description}</p>
            </div>
            <div className={styles['store__productcard-footer']}>
                <Link
                    className={`${styles['store__productcard-link']} ${
                        !isOpen ? styles['store__productcard-link--disabled'] : ''
                    }`}
                    to={`/products/${product.id}`}
                    state={{ product }}
                >
                    See more..
                </Link>
            </div>
        </div>
    )
}

export default ProductCard
