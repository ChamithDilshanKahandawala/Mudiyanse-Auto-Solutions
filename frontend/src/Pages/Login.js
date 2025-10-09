import React, { useContext, useState } from 'react'
import AuthContext from '../AuthContext';

export default function Login() {
    const [form,setForm] = useState({
        email:'',
        password:''
        });

    const {setToken} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();

        try{
            const res = await fetch('http://localhost:5000/api/auth/login',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(form)

            });
        }
    }

  return (
    <div>Login</div>
  )
}
