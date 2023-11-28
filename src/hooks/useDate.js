import { useEffect, useState } from "react";

export default function useDate(updateTime) {
    const [minutes, setMinutes] = useState("");
    const dateTimer = setInterval(()=> {
        setMinutes(new Date().getMinutes());
    }, 1000)

    useEffect(()=> {
        const date = new Date();
        const dateNTime = {
            date: date.toLocaleDateString().replaceAll('/', '-'), 
            time: date.toLocaleString([], {hour: '2-digit', minute: '2-digit'})
        }
    
        updateTime(dateNTime);
        console.log("Time Updated");

        return ()=> {
            clearInterval(dateTimer);
        }
    }, [minutes])
    
}