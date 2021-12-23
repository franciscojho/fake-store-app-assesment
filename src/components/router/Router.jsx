import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../home/Home'
import About from '../about/About'
import ProductDetail from '../product-detail/ProductDetail'
import Navbar from '../ui/navbar/Navbar'
import styles from './router.module.css'
import Footer from '../ui/footer/Footer'

const Router = () => {
    return (
        <BrowserRouter>
            <div className={styles.store__container}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/*" element={<Navigate to="/" replace />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default Router
