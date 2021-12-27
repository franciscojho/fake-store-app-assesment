import React, { useEffect, useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import { useParams } from 'react-router-dom'
import Loader from '../ui/loader/Loader'
import styles from './productDetail.module.css'

const getProduct = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()
    return data
}

const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        async function fetch() {
            const response = await getProduct(id)
            setProduct(response)
            setIsLoading(false)
        }
        fetch()
    }, [id])

    return (
        <div className={styles['store__prod-detail']}>
            {isLoading ? (
                <Loader />
            ) : (
                <>
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
                </>
            )}
        </div>
    )
}

export default ProductDetail
