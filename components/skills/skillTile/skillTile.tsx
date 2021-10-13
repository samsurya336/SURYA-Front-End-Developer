import React, { useRef, ReactElement, RefObject, MutableRefObject } from 'react'
import useDetectVisiblity from '../../../hooks/useDetectVisiblity'
import styles from './skillTile.module.css'

interface Props {
    title: string,
}

export default function SkillTile(props: Props): ReactElement {

    const skillsTileRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    const openCardRef: MutableRefObject<boolean> = useRef<boolean>(false);
    const isVisible: IntersectionObserverEntry | undefined = useDetectVisiblity(skillsTileRef,'-100px');

    if(isVisible){
        
        const skillInfoCardElmt:HTMLDivElement = (skillsTileRef.current?.children[0] as HTMLDivElement);
        const skillTitleElmt:HTMLDivElement = (skillsTileRef.current?.children[1] as HTMLDivElement);
        
        if(isVisible.isIntersecting){
            skillTitleElmt.style.transform = "translateY(0)"
            skillTitleElmt.style.opacity = "1"
            // skillTitleElmt.style.backgroundColor = "yellow"

            // console.log(`SK Visible `, isVisible.isIntersecting);
        }else{
            // skillTitleElmt.style.backgroundColor = "blue"
            skillTitleElmt.style.transform = "translateY(80px)"
            skillTitleElmt.style.opacity = "0"
        }

    }

    function toggleCard(){
        openCardRef.current = !openCardRef.current;

        let skillInfoCardElmt:HTMLDivElement = (skillsTileRef.current?.children[0] as HTMLDivElement);
        let skillTitleElmt:HTMLDivElement = (skillsTileRef.current?.children[1] as HTMLDivElement);

        // skillTitleElmt.style.transform = "translateY(0)"
        // skillTitleElmt.style.opacity = "1"

        // skillTitleElmt.style.backgroundColor = "blue"


        if(openCardRef.current){

            skillsTileRef.current?.style.setProperty('--height',skillInfoCardElmt.offsetHeight+'px');
            skillTitleElmt.style.padding = "8px";
        }else{
            skillsTileRef.current?.style.setProperty('--height','80px')
            skillTitleElmt.style.padding = "0";
        }
    }

    return (
        <div ref={skillsTileRef} className={styles.skill_tile_wrapper} onClick={toggleCard}>
            
            {/* <SkillInfoCard />

            <SkillTitleComp /> */}

            <SkillInfoCard />

            <SkillTitleComp />

        </div>
    )

}

function SkillInfoCard(){
    return(
        <div className={styles.skill_tile_info_card}>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
    );
}

function SkillTitleComp(){
    return(
        <div className={styles.skill_tile_header_wrapper}>
            <div className={styles.skill_tile_header}>
                    {console.log('Im Rendered')}
                LAhuerhe 
            </div>
        </div>
    );
}