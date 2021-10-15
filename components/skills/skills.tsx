import React , { useRef, RefObject} from 'react'
import useDetectVisiblity from '../../hooks/useDetectVisiblity';
import SkillTile from './skillTile/skillTile';
import styles from './skills.module.css';

export default function Skills({title}:{title:string}): JSX.Element {

    const skillsRef: RefObject<HTMLElement> = useRef<HTMLElement>(null);
    const isVisible: IntersectionObserverEntry | undefined = useDetectVisiblity(skillsRef,'-100px');

    if(isVisible){
        console.log(`Visible `, isVisible.isIntersecting);

        if(isVisible.isIntersecting){
            (skillsRef.current!.children[0] as HTMLParagraphElement).style.transform = "scale(1)";
        }else{
            (skillsRef.current!.children[0] as HTMLParagraphElement).style.transform = "scale(0)";
        }

    }
    
    return(
        <section ref={skillsRef} >
            <p className={styles.skills_heading}>{title}</p>
            <SkillTile title={'React Js'} />
            <SkillTile title={'Next Js'} runningText={'Yes this project is built with NEXT JS'}/>
            <SkillTile title={'Flutter Js'} />
            <SkillTile title={'Dart Js'} />
        </section>
    );
}