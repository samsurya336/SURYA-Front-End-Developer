import React , {useContext,RefObject,useRef} from 'react';
import Image from 'next/image'

import { CurrentSectionContext } from '../../contexts/currentSectionContext'
import useDetectVisiblity from '../../hooks/useDetectVisiblity';
import profileImage from '../../public/assets/profile_pic.jpeg'
import styles from './header.module.css';
// export interface IHeaderProps {
// }

export default function Header(): JSX.Element {

  const sectionContext = useContext(CurrentSectionContext)
  const headerRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const isVisible: IntersectionObserverEntry | undefined = useDetectVisiblity(headerRef,'-50px');

  if(headerRef.current){

    if(isVisible?.isIntersecting){
      sectionContext.toggleSection('section_1')
    }
      
  }

  return (
    <section>

        <div className={styles.header_top_comp_wrapper} ref={headerRef}>
            <Image src={profileImage} alt={'SURYA-Front-End-Dev'} />
            <NameComp />
        </div>

        <RoleComp />
      
    </section>
  );


  function NameComp(): JSX.Element{
    return(
        <section className={styles.name_section_wrapper}>

            <p>Hii i'm</p>

            <p>SURYA</p>

        </section>
    )
  }

  function RoleComp(): JSX.Element{
    return(
        <section className={styles.role_section_wrapper}>

            <p> Front End developer </p>
            <p> UI / UX </p>

        </section>
    )
  }
}
