import React, { ReactElement } from 'react'
import DateComp from './date/dateComp'
import styles from './experience.module.css'


export default function Experiecne(): ReactElement {
    return (
        <section >
            <p className={styles.experience_heading}>Experience</p>
            <div className={styles.updating_progress_wrapper} />
            <p className={styles.progress_bottom_text}>auto upgrading my-self and <span>skills</span> eveyday</p>
            <DateComp />
        </section>
    )
}
