import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import '../assets/css/login.css'
import useFetch from "../hooks/useFetch";
import BASE_URL from "../hooks/baseURL";

const Profile = () => {
    const {data:user} = useFetch(BASE_URL + "/user");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [profile, setProfile] = useState("");

    useEffect(() => {
        setName(user.name)
        setPhone(user.phone)
        setProfile(user.profile)
    }, [user])

    const updateProfile = async (e) => {
        e.preventDefault();
    }

    return (
        <div className="mb-5 px-2 py-5 d-flex flex-column  align-items-center">
            <h3 className="text-center gradient-text">Profile</h3>
            <label htmlFor="profile">
                <img
                    src={user.profile == 'https://livesportapi.online/assets/img/player_profile' ? 'https://batman-smoky.vercel.app/assets/user-BIwg6wwN.png' : user.profile}
                    style={{ width: "60px", height: "60px", borderRadius: "100%" }}
                />
            </label>

            <div className="mt-3 d-flex align-items-center gap-2">
                <i class="fa-solid fa-wallet"></i>
                <span className="fw-bold">Ks {Number(user.balance).toLocaleString()}</span>
            </div>
            {/* <p>{user.name}</p> */}
            <Form className="my-4" onSubmit={updateProfile} >
                <input type="file" id="profile" value={profile} onChange={(e)=>setProfile(e.target.value)} />
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Name..."
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        className="inputs"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        placeholder="Phone..."
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                        className="inputs"
                    />
                </Form.Group>
                <div className="text-center">
                    <button style={{ background: 'linear-gradient(to right, #cc45c4,#7944bc,#4277b6)' }} type="submit" className="text-white btn w-100" >
                        ပြောင်းမည်
                    </button>
                </div>
                <NavLink to={'/change-password'}>
                    <div className=" text-center mt-4">

                        <button className=" btn btn-outline-danger w-100 " type="submit" >
                            Change Password
                        </button>

                    </div>
                </NavLink>
            </Form>
        </div>
    );
};

export default Profile;