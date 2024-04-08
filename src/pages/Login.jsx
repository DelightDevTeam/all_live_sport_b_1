import React, { useEffect, useState } from "react";
import '../assets/css/login.css'
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BASE_URL from "../hooks/baseURL";

import logo from '../assets/img/logo.png';
// import flag from '../assets/img/flag.png';
// import { LuPhoneCall } from "react-icons/lu";
// import { FiKey } from "react-icons/fi";

const Login = () => {
    const [playerId, setPlayerId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState('');

    const auth = localStorage.getItem("token");
    const navigate = useNavigate();

    if(auth){
        useEffect(() => {
          navigate("/"); // Navigate to the home route
        }, [navigate]);
    }

    const login = (e) =>{
        e.preventDefault();
        setLoading(true);
        const loginData = {
            user_name: playerId,
            password: password
        };
        // console.log(loginData);
        
        fetch(BASE_URL + '/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginData)
        })
          .then(async response => {
            if (!response.ok) {
              setLoading(false);
              let errorData;
              try {
                errorData = await response.json();
              } catch (error) {
                console.error('Error parsing JSON:', error);
              }
        
              if (response.status === 422) {
                setErrMsg("");
                setError(errorData.errors);
                // console.error(`Login failed with status ${response.status}:`, errorData);
              }else if (response.status === 401) {
                // console.error(`Login failed with status ${response.status}:`, errorData);
                setError("");
                setErrMsg(errorData.message)
              }else{
                // console.error(`Unexpected error with status ${response.status}`);
              }
        
              throw new Error('Login Failed');
            }
        
            return response.json();
          })
          .then(data => {
            setData(data);
            setLoading(false);
            // console.log(data);
            if (data.data.token) {
              localStorage.setItem('token', data.data.token);
              navigate('/');
            } else {
              throw new Error('Token not found in response');
            }
          })
          .catch(error => {
            // console.error('Login error:', error);
          });
        }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center mb-5">

                <div style={{ background: '#431e77', color: '#d0c7dd', borderRadius: '50px' }} className="py-5 px-3 logins">
                    {/* <div className="d-flex justify-content-center mt-1">
                    <img src={logo} alt="" />
                </div> */}
                    <div className="text-center mt-sm-3 mb-3">
                        <h5 className="gradient-text py-sm-3">Login</h5>
                        <h3 className="text-light gradient-text d-block">Welcome Back!</h3>
                        <span className="gradient-text" style={{ fontSize: '12px' }}>welcome back we missed you</span>
                    </div>
                    {errMsg && (
                        <div className="alert alert-danger text-white">
                          *{errMsg}
                        </div>
                    )}
                    <Form className="mx-2" style={{ color: '#7d64a0' }} onSubmit={login}>
                        {/* <Form.Group className="mb-3">
                        <Form.Select >
                        <option value="1"><img src={flag} alt="" /></option>
                        </Form.Select>
                    </Form.Group> */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ fontSize: '14px' }}>PlayerID</Form.Label>
                            <Form.Control 
                            type="text" 
                            className="inputs" 
                            placeholder="LS01111" 
                            onChange={(e)=>setPlayerId(e.target.value)}
                            value={playerId}
                            />
                            {error.user_name && (
                                <div className="text-danger">*{error.user_name}</div>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{ fontSize: '14px' }}>Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            className="inputs" 
                            placeholder="Password" 
                            onChange={(e)=>setPassword(e.target.value)}
                            value={password}
                            />
                            {error.password && (
                                <span className="text-danger">*{error.password}</span>
                            )}
                        </Form.Group>

                        {/* <span style={{ fontSize: '12px' }} >Forgot Password? <Link to='/forget-password' ></Link> </span> */}

                        <div className="d-flex justify-content-center my-3">
                            <Button variant="primary" type="submit" className="d-block w-100" style={{ background: 'linear-gradient(to right, #cc45c4,#7944bc,#4277b6)' }}>
                                Login
                            </Button>
                        </div>

                        {/* <div className="text-center mt-4">
                            <span style={{ fontSize: '12px' }}>အကောင့်အသစ်ဖွင့်ရန် <Link to='/register'>ဒီမှာနှိပ်ပါ</Link> </span>
                        </div> */}
                    </Form>
                </div>
            </div>
        </>
    );
}

export default Login