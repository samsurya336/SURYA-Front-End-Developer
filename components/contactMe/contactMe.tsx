import React, { useContext, useRef, RefObject, ReactElement } from 'react'
import { CurrentSectionContext } from '../../contexts/currentSectionContext'
import useDetectVisiblity from '../../hooks/useDetectVisiblity';
import styles from './contactMe.module.css'

export default function ContactMe(): ReactElement {


    const sectionContext = useContext(CurrentSectionContext)
    const contactMeRef: RefObject<HTMLElement> = useRef<HTMLElement>(null);
    const isVisible: IntersectionObserverEntry | undefined = useDetectVisiblity(contactMeRef,'-50px');


    if(contactMeRef.current){

        if(isVisible?.isIntersecting){
            (contactMeRef.current as HTMLElement ).style.opacity = '1';
            sectionContext.toggleSection('section_7')
        }else{
            (contactMeRef.current as HTMLElement ).style.opacity = '0';
        }
        
    }


    const sendMail = async () => {
        const requestOptions = {
            method: 'GET'
        };
        const t = await fetch('api/hello', requestOptions).then((v)=>{
            return v.json()
        })
        console.log(t)
    }

    return(
        <section className={styles.contactMe_section_wrapper} ref={contactMeRef}>
            <div className={styles.contactMe_section}>
                <p className={styles.contactMe_heading}>Contact Me</p>
                <div className={styles.contactMe_fields_container}>
                    
                    <InputField placeholder={'Name'} name={'name'} onChange={(e) => {console.log(e.target.value)}} />
                    <InputField placeholder={'Email'} name={'email'} onChange={(e) => {console.log(e.target.value)}} />
                    <MessageField onChange={(e) => {console.log(e.target.value)}} />
                    <button className={styles.submit_btn} onClick={sendMail}>
                        SEND
                        <div className={styles.btn_hover}>SEND</div>
                        <div className={styles.btn_success}>SENT</div>
                    </button>
                    
                </div>
            </div>
        </section>
    );
}

interface InputFieldProps{
    placeholder: string,
    name: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function InputField(props:InputFieldProps) {
    return (
            <input
                className={styles.input_field}
                placeholder={props.placeholder}
                type='text'
                name={props.name}
                onChange={props.onChange}
            />
    )
}

interface messageFieldProps{
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

function MessageField(props:messageFieldProps) {
    return (
            <textarea 
                className={styles.message_field}
                placeholder='Message'
                name='message'
                onChange={props.onChange}
            />
    )
}
