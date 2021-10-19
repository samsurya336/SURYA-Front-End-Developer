import React , { useRef, RefObject} from 'react'
import useDetectVisiblity from '../../hooks/useDetectVisiblity';
import SkillTile from './skillTile/skillTile';
import styles from './skills.module.css';

export default function Skills({title,children}:{title:string,children:React.ReactNode}): JSX.Element {

    const skillsRef: RefObject<HTMLElement> = useRef<HTMLElement>(null);
    // const isVisible: IntersectionObserverEntry | undefined = useDetectVisiblity(skillsRef,'-100px');

    
    
    return(
        <section ref={skillsRef} className={styles.skill_section_wrapper}>
            <p className={styles.skills_heading}>{title}</p>
            <div className={styles.skill_section_skills_wrapper}>
                {children}
            </div>
        </section>
    );
}
{/* <SkillTile title={'React Js'} />
<SkillTile title={'Next Js'} runningText={'Yes this project is built with NEXT JS'}/>
<SkillTile title={'Flutter Js'} />
<SkillTile title={'Dart Js'} /> */}