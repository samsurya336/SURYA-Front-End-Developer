import React, { useState, useEffect, useRef, ReactElement, RefObject, MutableRefObject } from 'react'
import styles from './dateComp.module.css'


export default function DateComp(): ReactElement {

    // getHours()    Get the hour (0-23)
    // getSeconds()  Get the second (0-59)

    //Thu Dec 30 2021 12:45:17 GMT+0530 (India Standard Time)
    // M-09 | D-01 | 2019

    const currentdatetime = new Date();

    const startedCodingDate = new Date("09/01/2019");


    const calculateYear = ():string => {

        const startedYear = startedCodingDate.getFullYear();
        const currentYear = new Date().getFullYear();

        return (currentYear - startedYear).toString();

    }

    const calculateDays = ():string => {
        
        const currentYear = currentdatetime?.getFullYear();
        const currentYearStarting = new Date(`01/01/${currentYear}`)

        const differenceInTime = currentdatetime?.getTime() - currentYearStarting.getTime();

        const differenctInDays = differenceInTime / (1000 * 3600 * 24);
        //                                 1000 = 1 sec -> 1000 MliSec 
        //                                 3600 = 1 Hr -> 3600 Sec 
        //                                 24 = 24 Hr -> 1 dy

        // converting Float to Int
        const days = Math.trunc( differenctInDays )

        return days.toString();

    }

    const calculateHours = ():string => {

        let hours = currentdatetime.getHours();

        if(hours > 12){
            hours = hours - 12;
        }

        return hours.toString();

    }


    return(

        <>
            <div className={styles.date_comp_wrapper}>
                <span>{calculateYear()}</span><p>Year &nbsp;</p>
                <span>{calculateDays()}</span><p>Days &nbsp;</p>
                <span>{calculateHours()}</span><p>Hrs &nbsp;</p>
                <span>12</span><p>Sec</p>
                {/* <p>{`${calculateYear()} Year - ${calculateDays()} Days - ${calculateHours()} Hour `}</p> */}
            </div>

        </>

    );

}




interface SecondsProp {
    seconds: number,
    hours: number
    minutes: number,
}

function SecondsComp({seconds,hours,minutes}: SecondsProp): ReactElement {

    const [secondsState, setSecondsState] = useState<number>(0)
    const [hoursState, setHoursState] = useState<number>(0)

    const minutesRef = useRef(0)
    console.log(minutesRef.current)

    useEffect(() => {
        // let isMounted = true;
        // let secondsInc = seconds;
        // setSecondsState(seconds)
        // setHoursState(hours)
        // minutesRef.current = minutes;
        // const interval = setInterval(() => {

        //     if(secondsInc <= 60){
        //         secondsInc++;
        //         setSecondsState(prevState => prevState + 1)
        //     }else{
        //         minutesRef.current = minutesRef.current + 1;
        //         secondsInc = 1;
        //         setSecondsState(1)
        //     }

        //     if(minutesRef.current === 60){
        //             setHoursState(prevState => prevState + 1)
        //             minutesRef.current = 0;
        //     }

            
        // }, 1000);

        // return () => {
        //     isMounted = false;
        //     clearInterval(interval)
        // }
    }, [])

    return (
        <div>
            <p>Hours {`${hoursState}`}</p>
            <p>Seconds {`${secondsState}`}</p>
        </div>
    )
}



