import React from 'react';
import { navbarRoutes } from "../helpers/navbarRoutes";
import { Link } from 'react-scroll';
// react icons
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
// react hooks

import { useDispatch, useSelector } from "react-redux";
import { handleOpen } from "../store/navbar/navbarSlice";



const Navbar = () => {

    const dispatch = useDispatch();
    const isOpenNavbar = useSelector((state) => state.navbar.isOpen);
   

    const handleClick = () => {
        dispatch(handleOpen(!isOpenNavbar));
    };
  

    return (
        <div>
            <header>
                <div className="container">
                    <div className="logo">
                        <h1>Kamran Heyderli</h1>
                    </div>
                    <nav>
                        <ul>
                            {
                                navbarRoutes.map((item) => {
                                    return (
                                        <Link key={item.id} to={item.url} offset={0} smooth={true} duration={200}>{item.name}</Link>
                                    )
                                })
                            }
                            <a href="https://wa.me/994516621599" target="_blank">Contact</a>
                        </ul>
                    </nav>
                    <div style={{ color: "white" }} onClick={handleClick} className="hamburger">
                        {!isOpenNavbar ? <GiHamburgerMenu color={"rgb(15, 15, 105)"} size={30} />
                            : <AiOutlineClose
                                style={{ position: "relative", zIndex: "50", cursor: "pointer" }}
                                size={30}
                                color={"rgb(15, 15, 105)"} />}
                    </div>

                    <nav className={`mobile_menu transition-transform duration-1000 ${isOpenNavbar
                        ? "transform translate-x-0"
                        : "transform -translate-x-full"
                        }`}>
                        <div className="logo">
                            <h1>Kamran Heyderli</h1>
                        </div>
                        <ul>
                            {
                                navbarRoutes.map((item) => {
                                    return (
                                        <Link
                                            onClick={() => dispatch(handleOpen(false))}
                                            key={item.id}
                                            to={item.url}>{item.name}</Link>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar