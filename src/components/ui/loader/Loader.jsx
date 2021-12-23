import React from 'react'
import Loading from 'react-loading-components'
import styles from './loader.module.css'

const Loader = () => {
    return (
        <div className={styles.store__loader}>
            <Loading type="spinning_circles" width={100} height={100} fill="#f44242" />
        </div>
    )
}

export default Loader
