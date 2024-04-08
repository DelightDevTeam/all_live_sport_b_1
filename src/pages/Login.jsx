import React from "react";
import '../assets/css/login.css'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import logo from '../assets/img/logo.png';
// import flag from '../assets/img/flag.png';
// import { LuPhoneCall } from "react-icons/lu";
// import { FiKey } from "react-icons/fi";

const Login = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center mb-5">

                <div style={{ background: '#431e77', color: '#d0c7dd', borderRadius: '50px' }} className="py-5 px-3 logins">
                    {/* <div className="d-flex justify-content-center mt-1">
                    <img src={logo} alt="" />
                </div> */}
                    <div className="text-center mt-sm-3 mb-3">
                        <h5 className="gradient-text py-sm-3">အကောင့်ဝင်ရန်</h5>
                        <h3 className="text-light gradient-text d-block">Welcome Back!</h3>
                        <span className="gradient-text" style={{ fontSize: '12px' }}>welcome back we missed you</span>
                    </div>

                    <Form className="mx-2" style={{ color: '#7d64a0' }}>
                        {/* <Form.Group className="mb-3">
                        <Form.Select >
                        <option value="1"><img src={flag} alt="" /></option>
                        </Form.Select>
                    </Form.Group> */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ fontSize: '14px' }}>ဖုန်းနံပါတ်</Form.Label>
                            <Form.Control type="text" className="inputs" placeholder="03123456789" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{ fontSize: '14px' }}>လျှိ၀ှက်နံပါတ်</Form.Label>
                            <Form.Control type="password" className="inputs" placeholder="Password" />
                        </Form.Group>

                        <span style={{ fontSize: '12px' }} >လျှိ၀ှက်နံပါတ် မမှတ်မိဘူးလား ? <Link to='/forget-password' >ဒီမှာနှိပ်ပါ</Link> </span>

                        <div className="d-flex justify-content-center mt-3">
                            <Button variant="primary" type="submit" className="d-block w-100" style={{ background: 'linear-gradient(to right, #cc45c4,#7944bc,#4277b6)' }}>
                                အကောင့်၀င်မည်
                            </Button>
                        </div>

                        <div className="text-center mt-4">
                            <span style={{ fontSize: '12px' }}>အကောင့်အသစ်ဖွင့်ရန် <Link to='/register'>ဒီမှာနှိပ်ပါ</Link> </span>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default Login