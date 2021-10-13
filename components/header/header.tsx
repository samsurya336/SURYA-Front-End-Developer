import * as React from 'react';
import Image from 'next/image'

import profileImage from '../../public/assets/profile_pic.jpeg'
import styles from './header.module.css';
// export interface IHeaderProps {
// }

export default function Header(): JSX.Element {
  return (
    <section>

        <div className={styles.header_top_comp_wrapper}>
            <Image src={profileImage} />
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

            <p> Full stack developer </p>
            <p> UI / UX </p>

        </section>
    )
  }
}
