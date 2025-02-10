import { RxCaretDown } from "react-icons/rx";
import { useState } from "react";
import { menu } from "../utils/data";
import { Link } from "react-router";
const Header = () => {

    const [toggle, setToggle] = useState(false)

    function handleToggle() {
        console.log("toggle true")
        setToggle(true);
    }

    function closeToggle() {
        console.log("toggle false");
        setToggle(false);
    }

    return (
        <div className="relative z-1">
            <div className="overlap w-full h-full fixed duration-500" onClick={closeToggle} style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? "visible" : "hidden",
            }}>
                <div className="w-[150px] sm:w-[250px] md:w-[500px] bg-white h-full absolute duration-500" onClick={(e) => { e.stopPropagation() }} style={{
                    left: toggle ? "0%" : "-100%",
                }}></div>
            </div>
            <header className="p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[1000]">
                <div className="max-w-[1200px] mx-auto flex items-center">
                    <div className="w-[100px]">
                        <img src="/images/Swiggy-logo.png" className="w-full" alt="" />
                    </div>
                    <div className="">
                        <span className="font-bold border-b-[2px] border-[black]">Rajkot</span>
                        <RxCaretDown fontSize={25} onClick={() => handleToggle()} className="inline text-[#fc8019] cursor-pointer" />
                    </div>
                    <nav className="flex max-[480px]:hidden ml-auto gap-2 lg:gap-10 items-center md:text-[18px]">
                        {
                            menu.map(({ Icon, name, link }, index) => {
                                return <li key={index} className="list-none flex hover:text-[#fc8019] font-[600] cursor-pointer items-center gap-2">
                                    <Icon className="hidden sm:block" />
                                    <Link to={link}>
                                        {name}</Link>
                                </li>
                            })
                        }
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header