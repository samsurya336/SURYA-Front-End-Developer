import React, {useState, useContext, useRef, RefObject, ReactElement, MutableRefObject } from 'react'
import { CurrentSectionContext } from '../../contexts/currentSectionContext'
import useDetectVisiblity from '../../hooks/useDetectVisiblity';
import styles from './contactMe.module.css';

interface dataRefINTF{
    name:string,
    nameError: string,
    email:string,
    emailError: string,
    msg:string,
    msgError: string,
    hasErrors?:boolean,
}

export default function ContactMe(): ReactElement {

    const sectionContext = useContext(CurrentSectionContext)
    const contactMeRef: RefObject<HTMLElement> = useRef<HTMLElement>(null);
    const dataRef: MutableRefObject<dataRefINTF> = useRef({name:'',nameError:'',email:'',emailError:'',msg:'',msgError:'',hasErrors:false});
    const [buttonState, setButtonState] = useState<string>('SEND')
    const isVisible: IntersectionObserverEntry | undefined = useDetectVisiblity(contactMeRef,'-50px');


    if(contactMeRef.current){
        let t = dataRef.current;
        if(isVisible?.isIntersecting){
            (contactMeRef.current as HTMLElement ).style.opacity = '1';
            sectionContext.toggleSection('section_7')
        }else{
            (contactMeRef.current as HTMLElement ).style.opacity = '0';
        }
        
    }


    const validateFileds = (feildName:string,error:string):void => {

        if((dataRef.current[feildName as keyof dataRefINTF] as string).trim() !== ''){
            (dataRef.current[`${feildName}Error` as keyof dataRefINTF] as string) = '';
        }else{
            dataRef.current.hasErrors = true;
            (dataRef.current[`${feildName}Error` as keyof dataRefINTF] as string) = error;
        }
        
    }


    const sendMail = async () => {

        // if(dataRef.current.email.trim() !== ''){
        //     const re:RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //     const result = re.test(String(dataRef.current.email).toLowerCase());

        //     if(!result){
        //         dataRef.current.hasErrors = true;
        //         dataRef.current.emailError = 'Please enter a valid email';
        //     }else{
        //         dataRef.current.emailError = '';
        //     }

        // }else{
        //     dataRef.current.hasErrors = true;
        //     dataRef.current.emailError = 'Please enter your Email';
        // }

        // validateFileds('name','Please enter your Name')
        // validateFileds('msg','Please enter your Message')
        
        // if(dataRef.current.hasErrors){
        //     console.log('Has Errors')
        // }else{
        //     console.log('Verified')
        // }

        // setButtonState('SENDING...')


        const requestOptions = {
            method: 'POST'
        };
        const t = await fetch('api/sendmail', requestOptions).then((v)=>{
            return 'v.json()'
        })
        // console.log(t)


        // if(buttonState === 'SUCCESS'){

        // }


    }

    return(
        <section className={styles.contactMe_section_wrapper} ref={contactMeRef}>
            <div className={styles.contactMe_section}>
                <p className={styles.contactMe_heading}>Preciso Concepts</p>
                <div className={styles.contactMe_fields_container}>
                    
                    <InputField 
                        data={dataRef.current} 
                        placeholder={'Name'} 
                        name={'name'} 
                        />

                    <InputField 
                        data={dataRef.current} 
                        placeholder={'Email'} 
                        name={'email'} 
                    />

                    <MessageField data={dataRef.current} />
                    <button className={styles.submit_btn} onClick={sendMail}>
                        {buttonState}
                        <div className={styles.btn_hover}>SEND</div>
                        <div className={styles.btn_success}>SENT</div>
                    </button>

                    <input
                        type='checkbox'
                        id={styles.thankYouCardToggle}
                        style={{ display: 'block',width:'100%' }}
                        checked={buttonState === 'SUCCESS'}
                        onChange={(e) => {
                            if(e.target.checked) return setButtonState('SUCCESS')
                            setButtonState('ERROR')
                        }}
                    />
                    
                    <div className={styles.thankYou_card} >

                        <div className={styles.gradient_BG_wrapper} />
                        <div className={styles.content_wrapper}>
                            Thank you for showing your intrest and messaging me. For your confermation I have sent an mail to you kindly check it.
                            Thank You
                        </div>
                    </div>

                    {/* <a href="https/assets/profile_pic.jpeg" download="Resume.jpeg">Download</a> */}
                </div>
            </div>
        </section>
    );
}

interface InputFieldProps{
    placeholder: string,
    name: string,
    // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    data:dataRefINTF
}

function InputField(props:InputFieldProps) {

    const CrossIcon = () => {
        return(
            <span className={styles.input_field_suffix_icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ff0606a9" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                </svg>
            </span>
        )
    }

    return (
        <div className={styles.input_field_wrapper}>
            <input
                className={styles.input_field}
                style={{
                    borderColor: `${props.data[`${props.name}Error` as keyof dataRefINTF]? 'red' : '#3d3d3d'}`
                }}
                placeholder={props.placeholder}
                type='text'
                name={props.name}
                onChange={(e)=>{
                    (props.data[e.target.name as keyof dataRefINTF] as string) = e.target.value
                }
                }
            />
            {
                props.data[`${props.name}Error` as keyof dataRefINTF] && <p>{props.data[`${props.name}Error` as keyof dataRefINTF]}</p>
            }

            {
                props.data[`${props.name}Error` as keyof dataRefINTF] && <CrossIcon /> 
            }
            
        </div>
    )
}

interface messageFieldProps{
    data:dataRefINTF,
}

function MessageField(props:messageFieldProps) {
    return (
        <>
            <textarea 
                className={styles.message_field}
                style={{
                    borderColor: `${props.data.msgError? 'red' : '#3d3d3d'}`
                }}
                placeholder='Message'
                name='message'
                onChange={(e)=>{
                    props.data.msg = e.target.value;
                }}
            />
            {
                props.data.msgError && <p>{props.data.msgError}</p>
            }
        </>
    )
}
