import React, { useRef, ReactElement, RefObject, MutableRefObject } from 'react'
import useDetectVisiblity from '../../../hooks/useDetectVisiblity'
import Image from 'next/image'
import flutterLogo from '../../../public/assets/skills/Flutter_logo.png'
import { skillPopUpRefGlob } from '../skillInfoPopUp/skillInfoPopUp'
import { toggleSkillInfo ,assignCurrentSkillRef } from '../skillInfoPopUp/skillInfoPopUp'
import styles from './skillTile.module.css'

interface Props {
    title: string,
    runningText?: string,
    tag?:string,
}

export default function SkillTile(props: Props): ReactElement {

    const skillsTileRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    const openCardRef: MutableRefObject<boolean> = useRef<boolean>(false);
    

    function toggleCard(){
        assignCurrentSkillRef(skillsTileRef);
        toggleSkillInfo(true,props.title);
        // openCardRef.current = !openCardRef.current;
        // let val = (skillPopUpRefGlob.current as HTMLDivElement ).style.getPropertyValue('display');
        // const cardStyle = (skillPopUpRefGlob.current?.children[1] as HTMLDivElement).style;
        // const skilElmt = (skillsTileRef.current as HTMLDivElement)
        // var rect = skilElmt.getBoundingClientRect();

        
        // if(openCardRef.current){
        //     (skillPopUpRefGlob.current as HTMLDivElement ).style.display = "block";
        //     // cardStyle.background = 'blue'
        //     const skillTileHeight = (skillsTileRef.current as HTMLDivElement).offsetHeight;
        //     const skillTileWidth = (skillsTileRef.current as HTMLDivElement).offsetWidth;

        //     cardStyle.transition = 'none';
        //     cardStyle.top = `${rect.top}px`;
        //     cardStyle.right = `${rect.right}px`;
        //     cardStyle.bottom = `${rect.bottom}px`;
        //     cardStyle.left = `${rect.left}px`;
        //     cardStyle.height = `${skillTileHeight}px`;
        //     cardStyle.width = `${skillTileWidth}px`;

        //     setTimeout(() => {
        //         cardStyle.transition = 'all 0.7s';
        //         cardStyle.width = `90%`;
        //         cardStyle.height = `300px`;
        //         cardStyle.top = '50%';
        //         cardStyle.left = '50%';
        //         cardStyle.transform = 'translate(-50%, -50%)';
        //     }, 100);



        //     setTimeout(() => {
        //         console.log('Close')
        //         cardStyle.transform = 'translate(0, 0)';
        //         cardStyle.top = `${rect.top}px`;
        //         cardStyle.right = `${rect.right}px`;
        //         cardStyle.bottom = `${rect.bottom}px`;
        //         cardStyle.left = `${rect.left}px`;
        //         cardStyle.height = `${skillTileHeight}px`;
        //         cardStyle.width = `${skillTileWidth}px`;

        //         setTimeout(() => {
        //             (skillPopUpRefGlob.current as HTMLDivElement ).style.display = "none";
        //             cardStyle.transition = 'none';
        //         }, 900);
        //     }, 2000);

            
        // }else{
        //     const skillTileHeight = (skillsTileRef.current as HTMLDivElement).offsetHeight;
        //     const skillTileWidth = (skillsTileRef.current as HTMLDivElement).offsetWidth;

        //     cardStyle.transform = 'translate(0, 0)';
        //     cardStyle.height = `${skillTileHeight}px`;
        //     cardStyle.width = `${skillTileWidth}px`;

        //     setTimeout(() => {
        //         (skillPopUpRefGlob.current as HTMLDivElement ).style.display = "none";
        //         cardStyle.transition = 'none';
        //     }, 100);

        // }
    }


    

    return (
        <div ref={skillsTileRef} className={styles.skill_tile_wrapper} onClick={toggleCard}>
            {props.title}

        {
            props.tag &&
            <div className={styles.skill_tag}>
                {props.tag}
            </div>
        }
            
        </div>
    )

}


// function SkillInfoCard(){
//     return(
//         <div className={styles.skill_tile_info_card}>
//             is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
//         </div>
//     );
// }

// function SkillTitleComp(props:{title:string,runningText?:string,isCardOpened:boolean,tag?:string}){
//     return(
//         <div className={styles.skill_tile_header_wrapper}>
//             <div className={styles.skill_tile_header}>
//                 {/* <LogoComp /> */}
//                 <TitleComp />
//             </div>
//         </div>
//     );

//     function LogoComp(){
//         return(
//             <div className={styles.logo_wrapper}>
//                 <Image src={flutterLogo} />
//             </div>
//         )
//     }

//     function TitleComp(){
//         return(
//             <div className={styles.skill_title_text_wrapper}>
//                 <h5>{props.title} </h5>
//                 <p>{props.runningText}</p>
//                 <div className={styles.collaps_icon_wrapper}>
//                     <span />
//                     <span />
//                 </div>
//                 {
//                     props.tag && 
//                     <div className={styles.skill_tag}>{props.tag}</div>
//                 }
//             </div>
//         )
//     }
// }