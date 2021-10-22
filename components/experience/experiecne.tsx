import React, { useContext, useRef, ReactElement, RefObject } from 'react'
import { CurrentSectionContext } from '../../contexts/currentSectionContext'
import useDetectVisiblity from '../../hooks/useDetectVisiblity';
import DateComp from './date/dateComp'
import styles from './experience.module.css'


export default function Experiecne(): ReactElement {


    const sectionContext = useContext(CurrentSectionContext)
    const experienceRef: RefObject<HTMLElement> = useRef<HTMLElement>(null);
    const isVisible: IntersectionObserverEntry | undefined = useDetectVisiblity(experienceRef,'-50px');


    if(experienceRef.current){

        if(isVisible?.isIntersecting){
            (experienceRef.current as HTMLElement ).style.opacity = '1';
            sectionContext.toggleSection('section_6')
        }else{
            (experienceRef.current as HTMLElement ).style.opacity = '0';
        }
        
    }


    return (
        <section className={styles.experience_section_wrapper} ref={experienceRef} >
            <p className={styles.experience_heading}>Experience</p>
            <div className={styles.updating_progress_wrapper} />
            <p className={styles.progress_bottom_text}>auto upgrading my-self and <span>skills</span> eveyday</p>
            <DateComp />
            <FreelancerCard />
            <CompanyTile companyName={'Folio Hawks'} years={'2020 - present'} role={'Front End Developer'} type={'Freelancer'} />
            <CompanyTile companyName={'Preciso Concepts'} years={'2021 - present'} role={'Front End Developer'} type={'Full Time'} />
        </section>
    )
}

function FreelancerCard(){
    return(
        <div className={styles.freelancer_card_wrapper}>
            <h5>Freelancer</h5>
            <p>
                An active freelancer working on Flutter for building apps for IOS and Android and React js for Websites
            </p>
        </div>
    )
}

function CompanyTile(props:{companyName:string,years:string,role:string,type:string}){
    return(
        <section className={styles.company_tile_wrapper}>
            <h5>{props.companyName}</h5><span> {props.years}</span>
            <p>{props.role}</p>
            <p>{props.type}</p>
        </section>
    );
}
