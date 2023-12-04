import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function AuthCheck({children, authentication=true}) {
    const [loader, setLoader] = useState(true)
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem('user'));
    const categories = JSON.parse(localStorage.getItem('categories'));

    const userStatus = userData && Object.keys(userData).length===5;
    const catStatus = categories && categories.length>2;

    useEffect(()=> {
        if(authentication && !userStatus) navigate('/register');
        else if(authentication && userStatus && !catStatus) navigate('/category')
        else if(!authentication && userStatus) catStatus? navigate('/') : navigate('/category');
        setLoader(false);
    }, [])

  return (
    loader ? <h1>Loading...</h1> : <>{children}</>
  )
}

export default AuthCheck