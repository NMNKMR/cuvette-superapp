import { useEffect, useState } from "react";

export default function useDate(minutes) {
    const [dateNTime, setDateNTime] = useState({});

    useEffect(()=> {
        const date = new Date();
        const dateNTime = {
            date: date.toLocaleDateString().replaceAll('/', '-'), 
            time: date.toLocaleString([], {hour: '2-digit', minute: '2-digit'})
        }
        setDateNTime(dateNTime);
    }, [minutes])
    
    
    return dateNTime;
}