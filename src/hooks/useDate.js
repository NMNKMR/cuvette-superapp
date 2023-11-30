import { useEffect, useState } from "react";

export default function useDate() {
    // const [minutes, setMinutes] = useState(new Date().getMinutes());
    // const [dateNTime, setDateNTime] = useState({});

    // useEffect(()=> {
    //     const dateTimer = setInterval(()=> {
    //         minutes !== new Date().getMinutes() && setMinutes(new Date().getMinutes());
    //     }, 1000)

    //     return ()=> {
    //         clearInterval(dateTimer);
    //     }
    // }, [])

    // console.log("useDate");

    // useEffect(()=> {
        
    //     setDateNTime(dateNTime);
    //     console.log("Time Updated");
        
    // }, [minutes])
    
    const date = new Date();
    const dateNTime = {
        date: date.toLocaleDateString().replaceAll('/', '-'), 
        time: date.toLocaleString([], {hour: '2-digit', minute: '2-digit'})
    }
    
    return dateNTime;
}