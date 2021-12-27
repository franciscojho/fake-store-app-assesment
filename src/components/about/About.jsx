import React, { useEffect, useState } from 'react'
import Loader from '../ui/loader/Loader'
import styles from './about.module.css'

const About = () => {
    const [info, setInfo] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch('https://api.github.com/users/franciscojho')
            .then((res) => res.json())
            .then((json) => setInfo(json))
        setIsLoading(false)
    }, [])

    return (
        <div className={styles.store__about}>
            <div className={styles['store__about-container']}>
                {isLoading ? (
                    <Loader />
                ) : (
                    <div className={styles['store__about-info']}>
                        <img
                            className={styles['store__about-avatar']}
                            src="https://avatars.githubusercontent.com/u/42306296?v=4"
                            alt=""
                        />
                        <h3 className={styles['store__about-name']}>{info.name}</h3>
                        <h4 className={styles['store__about-login']}>
                            <a
                                href="https://github.com/franciscojho"
                                className={styles['store__about-login-link']}
                            >
                                @{info.login}
                            </a>
                        </h4>
                        <p className="store__about-bio">{info.bio}</p>
                        <ul className={styles['store__about-learnings']}>
                            <li>
                                <i className="fas fa-check" />
                                &nbsp;React
                            </li>
                            <li>
                                <i className="fas fa-check" />
                                &nbsp;Scrum
                            </li>
                            <li>
                                <i className="fas fa-check" />
                                &nbsp;Git Workflow
                            </li>
                        </ul>
                        <hr />
                        <ul className={styles['store__about-details']}>
                            <li className={styles.detail}>
                                <i className={`${styles.icon} far fa-building`} />
                                <span>&nbsp;{info.company}</span>
                            </li>
                            <li className={styles.detail}>
                                <i className={`${styles.icon} fas fa-map-marker-alt`} />
                                <span>&nbsp;{info.location}</span>
                            </li>
                            <li className={styles.detail}>
                                <i className={`${styles.icon} far fa-envelope`} />
                                <span>
                                    &nbsp;{!info.email ? 'franciscojho@hotmail.com' : info.email}
                                </span>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default About
