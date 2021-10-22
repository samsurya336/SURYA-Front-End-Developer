import React, { ReactElement } from 'react'
import styles from './footer.module.css'



export default function Footer(): ReactElement {
    return (
        <section className={styles.footer_section_wrapper}>
            <p>This Project built on  
                <a href={'https://nextjs.org/'} target="_blank" rel="noopener noreferrer"> NEXT JS </a> with 
                <a href={'https://www.typescriptlang.org/'} target="_blank" rel="noopener noreferrer"> TypeScript</a> and hosted on 
                <a  href={'https://vercel.com/'} target="_blank" rel="noopener noreferrer"> Vercel</a>. This Project is an open source so feel free to fork it and play.
            </p>

            <div>
                
            </div>

        </section>
    )
}
