import React,{useState,useContext,useEffect} from 'react'
import {AuthContext} from '../Context/AuthProvider';
import { useHistory } from 'react-router-dom';
import { storage,database } from '../firebase';
import './Signup.css'
function Signup() {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[name,setName] = useState('');
    const[error,setError] = useState('');
    const[file,setFile] = useState(null);
    const[loading,setLoading] = useState(false);
    const {signup} = useContext(AuthContext);
    const history = useHistory();
    const handleSignup = async (e)=>{
        e.preventDefault();
        try{
        setLoading(true);
        let res = await signup(email,password);
        let uid = res.user.uid;
        console.log(uid);
        const uploadTaskListener = storage.ref(`/users/${uid}/profileImage`).put(file);
        // fn 1 -> progress tracking
        // fn 2 -> error
        // fn 3 -> success
        uploadTaskListener.on('state_changed',fn1,fn2,fn3);
        function fn1(snapshot){
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('upload is ' + progress + '% done');
        }
        function fn2(error){
            setError(error);
            setTimeout(()=>{
                setError('')
            },2000);
            setLoading(false);
        }
        async function fn3(){
            let downloadUrl = await uploadTaskListener.snapshot.ref.getDownloadURL();
            console.log(downloadUrl);
            await database.users.doc(uid).set({
                email:email,
                userId:uid,
                username:name,
                createdAt:database.getCurrentTimeStamp(),
                profileUrl:downloadUrl,
                postIds:[]
            })
            setLoading(false);
            history.push('/')
        console.log('users has signed up');
        }
    }
    catch(err){
        setError(err)
        setTimeout(()=>setError(''),2000);
        setLoading(false)
    }
    }
    const handleFileSubmit=(e)=>{
        let file = e.target.files;
        if(file!=null){
            setFile(file)
        }
    }
    return (
        <div>
            <form onSubmit={handleSignup}>
                <div>
                    <label className="name" htmlFor=''>Username</label>
                    <input className="stext" type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                <label className="gmail" htmlFor=''>Email</label>
                    <input className="gtext" type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                <label className="pwd" htmlFor=''>Password</label>
                    <input className="ptxt" type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div>
                    <label className="pfile" htmlFor='profile'>Profile image</label>
                    <input className="pftxt" type='file' accept='image/*' onChange={handleFileSubmit}></input>
                </div>
                <button className="submt" type='submit' disabled={loading}>login</button>
            </form>
        </div>
    )
}

export default Signup
