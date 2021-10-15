import React, { useRef, ReactElement, RefObject, MutableRefObject } from 'react'
import useDetectVisiblity from '../../../hooks/useDetectVisiblity'
import styles from './skillTile.module.css'

interface Props {
    title: string,
    runningText?: string,
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
        }else{
            skillTitleElmt.style.transform = "translateY(80px)"
            skillTitleElmt.style.opacity = "0"
        }

    }

    function toggleCard(){
        openCardRef.current = !openCardRef.current;

        let skillTileElmt:HTMLDivElement = (skillsTileRef.current as HTMLDivElement);
        let skillInfoCardElmt:HTMLDivElement = (skillsTileRef.current?.children[0] as HTMLDivElement);
        let skillTitleElmt:HTMLDivElement = (skillsTileRef.current?.children[1] as HTMLDivElement);

        let skillTitleTextCompElmt:HTMLDivElement = (skillTitleElmt.children[0].children[1] as HTMLDivElement)

        if(openCardRef.current){
            onOpenCardAnimations(skillInfoCardElmt,skillTitleElmt,skillTitleTextCompElmt);
        }else{
            onCloseCardAnimations(skillTitleElmt,skillTitleTextCompElmt);
        }
    }


    function onOpenCardAnimations(skillInfoCardElmt:HTMLDivElement,skillTitleElmt:HTMLDivElement,skillTitleTextCompElmt:HTMLDivElement){

        //Increase The Height of Info Card
        skillsTileRef.current?.style.setProperty('--height',(skillInfoCardElmt.offsetHeight+80+'px'));

        //skill Title Component function SkillTitleComp()
        // Animate The Bottom Border when Card Opened
        skillTitleElmt.style.borderBottomLeftRadius = '0';
        skillTitleElmt.style.borderBottomRightRadius = '0';

        // function SkillTitleComp() > Title Text Component  
        // Glow and Scale Up The Title Text 
        (skillTitleTextCompElmt.children[0] as HTMLHeadingElement).style.color = '#ffff';
        (skillTitleTextCompElmt.children[0] as HTMLHeadingElement).style.transform = 'scale(1.3)';
        (skillTitleTextCompElmt.children[0] as HTMLHeadingElement).style.textShadow = '0 0 5px #adadad, 0 0 10px #adadad, 0 0 15px #adadad,0 0 20px #adadad, 0 0 25px #adadad, 0 0 30px #adadad, 0 0 35px #adadad';

        // function SkillTitleComp() > Collaps_icon  
        // Roate the collaps Icon
        (skillTitleTextCompElmt.children[2] as HTMLDivElement).style.transform = 'translateY(-50%) rotate(180deg)';
        // Animate the Icons A.K.A spans
        (skillTitleTextCompElmt.children[2].children[0] as HTMLSpanElement).style.width = '140%';
        (skillTitleTextCompElmt.children[2].children[1] as HTMLSpanElement).style.width = '140%';

    }

    function onCloseCardAnimations(skillTitleElmt:HTMLDivElement,skillTitleTextCompElmt:HTMLDivElement){

        //Decrease The Height of Info Card
        skillsTileRef.current?.style.setProperty('--height','80px')

        //skill Title Component function SkillTitleComp()
        // Animate The Bottom Border when Card Closed
        skillTitleElmt.style.borderBottomLeftRadius = '1rem';
        skillTitleElmt.style.borderBottomRightRadius = '1rem';

        // function SkillTitleComp() > Title Text Component  
        // Dim and Scale Down The Title Text
        (skillTitleTextCompElmt.children[0] as HTMLHeadingElement).style.color = '#ADADAD';
        (skillTitleTextCompElmt.children[0] as HTMLHeadingElement).style.transform = 'scale(1)';
        (skillTitleTextCompElmt.children[0] as HTMLHeadingElement).style.textShadow = 'none';

        // function SkillTitleComp() > Collaps_icon  
        // Roate the collaps Icon
        (skillTitleTextCompElmt.children[2] as HTMLDivElement).style.transform = 'translateY(-50%) rotate(0deg)';
        // Animate the Icons A.K.A spans
        (skillTitleTextCompElmt.children[2].children[0] as HTMLSpanElement).style.width = '70%';
        (skillTitleTextCompElmt.children[2].children[1] as HTMLSpanElement).style.width = '70%';
    }

    return (
        <div ref={skillsTileRef} className={styles.skill_tile_wrapper} onClick={toggleCard}>

            <SkillInfoCard />

            <SkillTitleComp title={props.title} runningText={props.runningText} isCardOpened={openCardRef.current} />

        </div>
    )

}

function SkillInfoCard(){
    return(
        <div className={styles.skill_tile_info_card}>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </div>
    );
}

function SkillTitleComp(props:{title:string,runningText?:string,isCardOpened:boolean}){
    return(
        <div className={styles.skill_tile_header_wrapper}>
            <div className={styles.skill_tile_header}>
                <LogoComp />
                <TitleComp />
            </div>
        </div>
    );

    function LogoComp(){
        return(
            <div className={styles.logo_wrapper}>

            </div>
        )
    }

    function TitleComp(){
        return(
            <div className={styles.skill_title_text_wrapper}>
                <h5>{props.title} </h5>
                <p>{props.runningText}</p>
                <div className={styles.collaps_icon_wrapper}>
                    <span />
                    <span />
                </div>
            </div>
        )
    }
}