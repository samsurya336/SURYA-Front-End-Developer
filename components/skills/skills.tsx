import React , { useRef, RefObject} from 'react'
import useDetectVisiblity from '../../hooks/useDetectVisiblity';
import SkillTile from './skillTile/skillTile';
import styles from './skills.module.css';

export default function Skills({title,children}:{title:string,children:React.ReactNode}): JSX.Element {

    const skillsRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    const isVisible: IntersectionObserverEntry | undefined = useDetectVisiblity(skillsRef,'-50px');


    if(skillsRef.current){

        if(isVisible?.isIntersecting){
            (skillsRef.current as HTMLDivElement ).style.opacity = '1';
            (skillsRef.current as HTMLDivElement ).style.transform = 'scale(1)';
        }else{
            (skillsRef.current as HTMLDivElement ).style.opacity = '0';
            (skillsRef.current as HTMLDivElement ).style.transform = 'scale(0.45)';
        }
        
    }

    
    
    return(
        <section className={styles.skill_section_wrapper}>
            <div className={styles.skill_section} ref={skillsRef}>
                <p className={styles.skills_heading}>{title}</p>
                <div className={styles.skill_section_skills_wrapper}>
                    {children}
                </div>
            </div>
            <div style={{width:'100px',height: '100px', backgroundColor:'green', position: 'absolute', bottom:'20px'}}>

            </div>
        </section>
    );
}
{/* <SkillTile title={'React Js'} />
<SkillTile title={'Next Js'} runningText={'Yes this project is built with NEXT JS'}/>
<SkillTile title={'Flutter Js'} />
<SkillTile title={'Dart Js'} /> */}