import React, { useEffect, useRef, ReactElement, RefObject, MutableRefObject } from 'react'
import styles from './skillInfoPopUp.module.css'

export let skillPopUpRefGlob: RefObject<HTMLDivElement>; 

let currentSkillRef:RefObject<HTMLDivElement>;

export const assignCurrentSkillRef = (ref:RefObject<HTMLDivElement>) => {
    currentSkillRef =  ref;
}


export const toggleSkillInfo = (isOpen:boolean,title:string='') => {

    let val = (skillPopUpRefGlob.current as HTMLDivElement ).style.getPropertyValue('display');
        const cardStyle = (skillPopUpRefGlob.current?.children[1] as HTMLDivElement).style;
        const skilElmt = (currentSkillRef.current as HTMLDivElement)
        var rect = skilElmt.getBoundingClientRect();

        
        if(isOpen){
            (skillPopUpRefGlob.current as HTMLDivElement ).style.display = "block";
            // cardStyle.background = 'blue'
            const skillTileHeight = (currentSkillRef.current as HTMLDivElement).offsetHeight;
            const skillTileWidth = (currentSkillRef.current as HTMLDivElement).offsetWidth;

            cardStyle.transition = 'none';
            cardStyle.top = `${rect.top}px`;
            cardStyle.right = `${rect.right}px`;
            cardStyle.bottom = `${rect.bottom}px`;
            cardStyle.left = `${rect.left}px`;
            cardStyle.height = `${skillTileHeight}px`;
            cardStyle.width = `${skillTileWidth}px`;
            (skillPopUpRefGlob.current?.children[1].children[0] as HTMLDivElement).textContent = title;
            
            setTimeout(() => {
                // function SkillTitleComp() > Title Text Component  
                // Glow and Scale Up The Title Text 
                (skillPopUpRefGlob.current?.children[1].children[0] as HTMLDivElement).style.color = '#ffff';
                // (skillPopUpRefGlob.current?.children[1].children[0] as HTMLDivElement).style.transform = 'scale(1.3)';
                (skillPopUpRefGlob.current?.children[1].children[0] as HTMLDivElement).style.textShadow = '0 0 5px #adadad, 0 0 10px #adadad, 0 0 15px #adadad,0 0 20px #adadad, 0 0 25px #adadad, 0 0 30px #adadad, 0 0 35px #adadad';
                
                (currentSkillRef.current as HTMLDivElement).style.opacity = '0';
                cardStyle.transition = 'all 0.7s';
                cardStyle.width = `90%`;
                cardStyle.height = `300px`;
                cardStyle.top = '50%';
                cardStyle.left = '50%';
                cardStyle.transform = 'translate(-50%, -50%)';
            }, 100);



            // setTimeout(() => {
            //     console.log('Close')
            //     cardStyle.transform = 'translate(0, 0)';
            //     cardStyle.top = `${rect.top}px`;
            //     cardStyle.right = `${rect.right}px`;
            //     cardStyle.bottom = `${rect.bottom}px`;
            //     cardStyle.left = `${rect.left}px`;
            //     cardStyle.height = `${skillTileHeight}px`;
            //     cardStyle.width = `${skillTileWidth}px`;

            //     setTimeout(() => {
            //         (skillPopUpRefGlob.current as HTMLDivElement ).style.display = "none";
            //         cardStyle.transition = 'none';
            //     }, 900);
            // }, 2000);

            
        }else{
            const skillTileHeight = (currentSkillRef.current as HTMLDivElement).offsetHeight;
            const skillTileWidth = (currentSkillRef.current as HTMLDivElement).offsetWidth;

            cardStyle.transform = 'translate(0, 0)';
            cardStyle.top = `${rect.top}px`;
            cardStyle.right = `${rect.right}px`;
            cardStyle.bottom = `${rect.bottom}px`;
            cardStyle.left = `${rect.left}px`;
            cardStyle.height = `${skillTileHeight}px`;
            cardStyle.width = `${skillTileWidth}px`;

            // function SkillTitleComp() > Title Text Component  
            // Dim and Scale Down The Title Text
            (skillPopUpRefGlob.current?.children[1].children[0] as HTMLDivElement).style.color = '#7e7e7e';
            // (skillTitleTextCompElmt.children[0] as HTMLHeadingElement).style.transform = 'scale(1)';
            (skillPopUpRefGlob.current?.children[1].children[0] as HTMLDivElement).style.textShadow = 'none';

            setTimeout(() => {
                (currentSkillRef.current as HTMLDivElement).style.opacity = '1';
                (skillPopUpRefGlob.current as HTMLDivElement ).style.display = "none";
                cardStyle.transition = 'none';
            }, 800);

        }
}

export default function SkillInfoPopUp(): ReactElement {

    const skillPopUpRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        skillPopUpRefGlob = skillPopUpRef;
    }, [])
    
    function closeMe(){
        // const cardStyle = (skillPopUpRef.current?.children[1] as HTMLDivElement).style;
        // (skillPopUpRefGlob.current as HTMLDivElement ).style.display = "none";
        // cardStyle.transform = 'none';

        toggleSkillInfo(false);
    }

    return (
        <div ref={skillPopUpRef} className={styles.skill_info_popUp_wrapper}>
            <button onClick={closeMe}> CLOSE ME </button>
            <div className={styles.skill_info_popUp_card}>
                <h6>
                    React JS
                </h6>
            </div>
        </div>
    )
}
