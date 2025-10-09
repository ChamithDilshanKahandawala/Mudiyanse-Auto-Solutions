import { set } from 'mongoose';
import React, { createContext, useState } from 'react'
import Auth from '../../backend/Services/Auth/middleware/auth';

export const AuthContext = createContext();

const API = process.env.REACT_APP_AUTH_URL || "http://localhost:5000/api/auth";

export function AuthProvider({children}) {
    const [token, setToken] = useState(localStorage.getItem('token')||null);
    const [user,setUser] = useState(null);

    useEffect(()=>{
        if(token){
            localStorage.setItem('token',token);
            fetch(`${API}/api/auth/profile`, {
                headers:{Authorization:`Bearer ${token}`}
            })
            .then(res=>res.json())
            .then(data=> {
                if(!data || data.error){
                    setUser(null);
                    setToken(null);
                }else{
                    setUser(data);
                }
            })
            .catch(()=>{
                setUser(null);
                setToken(null);
            });
        }else{
            localStorage.removeItem('token');
            setUser(null);
        }

    },[token]);

    const logout =()=>{
        setToken(null);
        setUser(null);
    };


  return (
    <AuthContext.Provider value={{ token,setToken, user,setUser, logout }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext