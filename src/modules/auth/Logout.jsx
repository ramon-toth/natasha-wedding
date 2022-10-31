import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

function Logout() {
    const navigate = useNavigate();
    window.sessionStorage.removeItem('token')
    // navigate('/')
    console.log('remove item')

    useEffect(() => {
        console.log('remove item')

        // window.sessionStorage.removeItem('token')
        // navigate('/')
    }, [])
    return (
        <></>
    );
}

export default Logout;