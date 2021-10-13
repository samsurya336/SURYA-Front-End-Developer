import React, { useEffect, ReactElement } from 'react'
import styles from './scrollProgress.module.css'

// @ts-nocheck use this to quick fix
export default function ScrollProgress(): ReactElement {
    useEffect(() => {
        window.onscroll = function(){
            showPositio()
          }
        return () => {
            window.removeEventListener('scroll',()=>{});
        }
    }, [])

    function showPositio(){
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        // console.log(scrolled)
        document.getElementById(styles.progress_bar)!.style.width = scrolled + "%";
      }
    
    return (
        <div className={styles.progress_container}>
            <div id={styles.progress_bar} />
        </div>
    )
}
