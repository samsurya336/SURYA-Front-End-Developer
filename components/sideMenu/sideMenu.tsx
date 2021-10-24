import React, { useState, useEffect , ReactElement, useContext } from 'react'
import { CurrentSectionContext } from '../../contexts/currentSectionContext'
import styles from './sideMenu.module.css'


export default function SideMenu(): ReactElement {

    const sectionContext = useContext(CurrentSectionContext)
    let [currentSection, setCurrentSection] = useState('section_1')

    useEffect(() => {

        sectionContext.toggleSection = (sectionID:string) => {
            // Warning: Cannot update a component (`SideMenu`) while rendering a different component (`Skills`). To locate the bad setState() call inside `Skills`, 
            //follow the stack trace as described in
            setTimeout(() => {
                setCurrentSection(sectionID)
            }, 5);
        }

        // window.addEventListener('hashchange', () => {

        //     const href = window.location.href;
        //     const urlLength = href.length;
        //     const rem = urlLength - 9;
        //     const sli = href.slice(rem,urlLength)
            
        //     setCurrentSection(sli)
        
        // });
        // return () => {
        //     window.removeEventListener('hashchange', ()=>{})
        // }
    }, [])

    const isCurrentMenu = (section:string):boolean =>  {

        return section === currentSection
    }


    const Menu = ({href,title}:{href:string,title:string}):ReactElement => {
        return(
            <a href={`#${href}`} className={styles.side_menu}>
                
                <h2 style={
                    {
                        color: `${isCurrentMenu(href) ? '#ffff' : '#7e7e7e' }`,
                        borderColor: `${isCurrentMenu(href) ? '#adadad' : '#3d3d3d98' }`,
                        textShadow: `${isCurrentMenu(href) ? 
                            '0 0 5px #adadad, 0 0 10px #adadad, 0 0 15px #adadad,0 0 20px #adadad, 0 0 25px #adadad, 0 0 30px #adadad, 0 0 35px #adadad' 
                            : 'none' 
                        }`
                    }
                }>{title}</h2>
            
            </a>
        )
    }

    return (
        <div className={styles.side_menus_wrapper}>

            <div className={styles.side_menus}>

              <Menu href={'section_1'} title={'About'} />
              <Menu href={'section_2'} title={'Front End Skills'} />
              <Menu href={'section_3'} title={'Back End Skills'} />
              <Menu href={'section_4'} title={'Programming Languages'} />
              <Menu href={'section_5'} title={'Tools I Use'} />
              <Menu href={'section_6'} title={'Experience'} />
              <Menu href={'section_7'} title={'Contact Me'} />

            </div>
            
        </div>
    )
}
