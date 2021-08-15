import React,{useState,useContext, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import {AuthContext} from '../Context/AuthProvider';
import './Login.css';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);
    const {login,currentUser} =useContext(AuthContext);
    const history = useHistory();
      const handleSignup = (e) =>{
          history.push('/signup')

      } 
     const handleSubmit = async(e)=>{
          console.log('hi');
        e.preventDefault()
        try {
          console.log('Logging in user')
          setLoading(true)
          await login(email, password)
          setLoading(false)
          history.push('/')
        } catch {
          setError("Failed to log in")
          setTimeout(()=>setError(''),2000)
          setLoading(false)
        }
      }
      useEffect(()=>{
        if(currentUser)
        {
          history.push('/')
        }
      },[])
    return (
        <div>
              <form onSubmit={handleSubmit} >
             <div>
                <label className="email" htmlFor=''>Email</label>
                    <input className="etext" type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                <label className="pass" htmlFor=''>Password</label>
                    <input className="ptext" type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button className="final" type='submit' disabled={loading}>Login</button>
                <div>
                  <button className="create" onClick={handleSignup}>SignUP</button>
                </div>
                {error?<h1>{error}</h1>:<></>}
                </form>
               
        </div>
    )
}

export default Login