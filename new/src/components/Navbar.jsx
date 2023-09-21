import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsFillSunFill, BsMoonStarsFill, BsFillPersonFill } from 'react-icons/bs'
import { GrMenu, GrClose } from 'react-icons/gr'
import { message } from "antd";
import { useSelector,useDispatch } from "react-redux";

import '../assets/styles/navbar.css'

import { setDarkMode } from "../store/actions/appAction";

export function Navbar({ props }) {
    const darkMode = useSelector(state => state.app.darkMode);
    const [toggleMenu, setToggleMenu] = useState(false)
    const isLoggedIn = useSelector(state => state.user.loggedIn);
    const dispatch = useDispatch();


    return (
        <div className="-view">
            <header className={`${darkMode ? "bg-gray-900 text-white" : "bg-rose-600 "}`}>
                <nav className="flex justify-between items-center w-[92%] p-3 mx-auto">

                    <div className="">
                        <NavLink to="/">
                            <h1 className="font-bold text-2xl hover:text-gray-100">Debtodo</h1>
                        </NavLink>
                    </div>

                    <div className={`md:static absolute ${darkMode ? "bg-gray-900" : "bg-rose-600"} md:min-h-fit min-h-[20vh] left-0 ${!toggleMenu ? 'top-[-100%]' : 'top-[6.5%]'} top-[-100%] md:w-auto w-full flex items-center px-5`}>
                        <ul className="flex md:flex-row flex-col md:items-center md:gap-7 gap-4 text-xl">
                            <li>
                                <NavLink
                                    className="hover:text-gray-100"
                                    to="/debts"
                                >
                                    Debts
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="hover:text-gray-100"
                                    to="/timebox"
                                >
                                    Timebox
                                </NavLink>
                            </li>
                            <li>
                                {!isLoggedIn ?

                                    <NavLink
                                        className="hover:text-gray-100 "
                                        to="/profile"
                                    >
                                        <BsFillPersonFill className="text-2xl" />
                                    </NavLink>
                                    :
                                    <NavLink
                                        className="hover:text-gray-100"
                                        to="/login"
                                    >
                                        Login
                                    </NavLink>
                                }
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="btns flex">
                            {darkMode ? (

                                <button
                                    onClick={() => { dispatch(setDarkMode()) }}
                                    className="dark cursor-pointer"
                                >
                                    <BsFillSunFill className="text-black" />
                                </button>
                            ) : (

                                <button
                                    onClick={() => { dispatch(setDarkMode()) }}
                                    className="darck cursor-pointer"
                                >
                                    <BsMoonStarsFill className="text-white" />
                                </button>
                            )}
                        </div>
                        <div className="toggle text-3xl ">
                            {!toggleMenu ? (

                                <GrMenu
                                    onClick={() => setToggleMenu(!toggleMenu)}
                                    className="cursor-pointer md:hidden white-icon"
                                />
                            ) : (
                                <GrClose
                                    onClick={() => setToggleMenu(!toggleMenu)}
                                    className="cursor-pointer md:hidden text-white"
                                />
                            )}
                        </div>




                    </div>

                </nav>
            </header>
        </div>
    );
}