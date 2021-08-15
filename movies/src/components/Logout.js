import React from 'react'
import AuthProvider from '../Context/AuthProvider';
import { useHistory } from 'react-router-dom';
function Logout() {
    const history = useHistory();
    const handleLogout= (e) =>{
        history.push('/login')
    }
    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout

