import React, { useState, useEffect , ReactElement } from 'react'
import styles from './sideMenu.module.css'


export default function SideMenu(): ReactElement {

    const [menuIndex, setMenuIndex] = useState(1)

    useEffect(() => {
        window.addEventListener('hashchange', () => {

            const href = window.location.href;
            const urlLength = href.length;
            const rem = urlLength - 9;
            const sli = href.slice(rem,urlLength)
            console.log(sli)
        
        });
        return () => {
            window.removeEventListener('hashchange', ()=>{})
        }
    }, [])

    const isCurrentMenu = ():boolean =>  {
        return true;
    }

    const onNavigate = ():void => {

    }

    const Menu = ({href,title}:{href:string,title:string}):ReactElement => {
        return(
            <a href={href} className={styles.side_menu} onClick={onNavigate}>
                
                <h2 style={{color: `${isCurrentMenu() ? 'white' : 'blue' }`}}>{title}</h2>
            
            </a>
        )
    }

    return (
        <div className={styles.side_menus_wrapper}>

            <div className={styles.side_menus}>

              <Menu href={'#section_1'} title={'Front End Skills'} />
              <Menu href={'#section_2'} title={'Back End Skills'} />
              <Menu href={'#section_3'} title={'Programming Languages'} />
              <Menu href={'#section_4'} title={'Tools I Use'} />

            </div>
            
        </div>
    )
}
